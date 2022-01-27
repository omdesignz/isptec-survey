<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Answer extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'answers';

    protected $fillable = [
        'value',
        'question_id',
        'entry_id',
        'gender',
    ];

    public function entry()
    {
        return $this->belongsTo(Entry::class);
    }

    public function question()
    {
        return $this->belongsTo(Question::class);
    }

    public function class()
    {
        return $this->belongsTo(LearningClass::class, 'value');
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class, 'value');
    }
}
