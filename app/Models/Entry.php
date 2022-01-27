<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Entry extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'entries';

    protected $fillable = [
        'survey_id',
        'participant_id',
        'gender',
    ];

    protected static function boot()
    {
        parent::boot();

        //Prevent submission of entries that don't meet the parent survey's constraints.
        static::creating(function (self $entry) {
            $entry->validateParticipant();
            $entry->validateMaxEntryPerUserRequirement();
        });
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }

    public function survey()
    {
        return $this->belongsTo(Survey::class, 'survey_id');
    }

    public function participant()
    {
        return $this->belongsTo(User::class, 'participant_id');
    }

    public function for(Survey $survey)
    {
        $this->survey()->associate($survey);

        return $this;
    }

    public function by(Model $model = null)
    {
        $this->participant()->associate($model);

        return $this;
    }

    public function fromArray(array $values)
    {
        foreach ($values as $key => $value) {
            if ($value === null) {
                continue;
            }

            $answer_class = get_class(app()->make(Answer::class));

            if (gettype($value) === 'array') {
                $value = implode(', ', $value);
            }

            $this->answers->add($answer_class::make([
                'question_id' => substr($key, 1),
                'entry_id' => $this->id,
                'value' => $value,
            ]));
        }

        return $this;
    }

    public function answerFor(Question $question)
    {
        $answer = $this->answers()->where('question_id', $question->id)->first();

        return isset($answer) ? $answer->value : null;
    }

    public function push()
    {
        $this->save();

        foreach ($this->answers as $answer) {
            $answer->entry_id = $this->id;
        }

        return parent::push();
    }

    public function validateParticipant()
    {
        if ($this->survey->acceptGuestEntries()) {
            return;
        }

        if ($this->participant_id !== null) {
            return;
        }

        throw new GuestEntriesNotAllowedException();
    }

    public function validateMaxEntryPerUserRequirement()
    {
        $limit = $this->survey->limitPerParticipant();

        if ($limit === null) {
            return;
        }

        $count = static::where('participant_id', $this->participant_id)
            ->where('survey_id', $this->survey->id)
            ->count();

        if ($count >= $limit) {
            throw new MaxEntriesPerUserLimitExceeded();
        }
    }
}
