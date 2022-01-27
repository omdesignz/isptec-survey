<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Survey extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'surveys';

    protected $fillable = [
        'name',
        'settings',
    ];

    protected $casts = [
        'settings' => 'array'
    ];

    public function sections()
    {
        return $this->hasMany(Section::class);
    }

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function entries()
    {
        return $this->hasMany(Entry::class);
    }

    public function acceptGuestEntries()
    {
        return $this->settings['accept-guest-entries'] ?? false;
    }

    public function limitPerParticipant()
    {
        if($this->acceptGuestEntries()) {
            return;
        }

        $limit = $this->settings['limit-per-participant'] ?? 1;

        return $limit !== -1 ? $limit : null;
    }

    public function entriesFrom(Model $participant)
    {
        return $this->entries()->where('participant_id', $participant->id);
    }

    public function lastEntry(Model $participant = null)
    {
        return $participant === null ? null : $this->entriesFrom($participant)->first();
    }

    public function isEligible(Model $participant = null)
    {
        if($participant === null) {
            return $this->acceptGuestEntries();
        }

        if($this->limitPerParticipant() === null) {
            return true;
        }

        return $this->limitPerParticipant() > $this->entriesFrom($participant)->count();
    }


    public function getRulesAttribute()
    {
        return $this->questions->mapWithKeys(function($question) {
            return [$question->key => $question->rules];
        })->all();
    }
}
