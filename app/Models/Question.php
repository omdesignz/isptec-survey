<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Question extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'questions';

    protected $fillable = [
        'type',
        'options',
        'content',
        'rules',
        'survey_id',
    ];

    protected $casts = [
        'rules' => 'array',
        'options' => 'array',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function(self $question) {
            $question->load('section');

            if ($question->section) {
                $question->survey_id = $question->section->survey_id;
            }
        });
    }

    public function survey()
    {
        return $this->belongsTo(Survey::class);
    }

    public function section()
    {
        return $this->belongsTo(Section::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }

    public function getRulesAttribute($value)
    {
        $value = $this->castAttribute('rules', $value);

        return $value !== null ? $value : [];
    }

    public function getKeyAttribute()
    {
        return "q{$this->id}";
    }

    public function scopeWithoutSection($query)
    {
        return $query->where('section_id', null);
    }
}
