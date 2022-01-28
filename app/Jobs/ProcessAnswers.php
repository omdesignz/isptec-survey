<?php

namespace App\Jobs;

use App\Models\Entry;
use App\Models\Answer;
use App\Models\Subject;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class ProcessAnswers implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $data;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        
        // Create Entry
        $participant = Entry::create([
            'survey_id' => 1,
            'participant_id' => null,
            'gender' => $this->data['gender'],
        ]);

        // Gender Answer

        $gAnswers = Answer::create([
            'survey_id' => 1,
            'entry_id' => $participant->id,
            'question_id' => 1,
            'gender' => null,
            'value' => $this->data['gender'],
        ]);

        // Class Answer
        $cAnswers = Answer::create([
            'survey_id' => 1,
            'entry_id' => $participant->id,
            'question_id' => 2,
            'gender' => null,
            'value' => $this->data['class'],
        ]);

        // Punctuality Answer - No delays 

        if(count($this->data['no_delays']) > 0) {
            
            $subs = Subject::whereIn('id', $this->data['no_delays'])->get();

            foreach($subs as $sub) {
            
                Answer::create([
                    'survey_id' => 1,
                    'entry_id' => $participant->id,
                    'question_id' => 3,
                    'gender' => $this->data['gender'],
                    'value' => $sub->id,
                ]);
            }
        }

        if(count($this->data['few_delays']) > 0) {
            
            $subs = Subject::whereIn('id', $this->data['few_delays'])->get();

            foreach($subs as $sub) {
            
                Answer::create([
                    'survey_id' => 1,
                    'entry_id' => $participant->id,
                    'question_id' => 4,
                    'gender' => $this->data['gender'],
                    'value' => $sub->id,
                ]);
            }
        }

        if(count($this->data['lots_of_delays']) > 0) {
            
            $subs = Subject::whereIn('id', $this->data['lots_of_delays'])->get();

            foreach($subs as $sub) {
            
                Answer::create([
                    'survey_id' => 1,
                    'entry_id' => $participant->id,
                    'question_id' => 5,
                    'gender' => $this->data['gender'],
                    'value' => $sub->id,
                ]);
            }
        }

        // Absences Answer - No absences
        if(count($this->data['no_absences']) > 0) {
            
            $subs = Subject::whereIn('id', $this->data['no_absences'])->get();

            foreach($subs as $sub) {
            
                Answer::create([
                    'survey_id' => 1,
                    'entry_id' => $participant->id,
                    'question_id' => 6,
                    'gender' => $this->data['gender'],
                    'value' => $sub->id,
                ]);
            }
        }

        if(count($this->data['few_absences']) > 0) {
            
            $subs = Subject::whereIn('id', $this->data['few_absences'])->get();

            foreach($subs as $sub) {
            
                Answer::create([
                    'survey_id' => 1,
                    'entry_id' => $participant->id,
                    'question_id' => 7,
                    'gender' => $this->data['gender'],
                    'value' => $sub->id,
                ]);
            }
        }

        if(count($this->data['lots_of_absences']) > 0) {
            
            $subs = Subject::whereIn('id', $this->data['lots_of_absences'])->get();

            foreach($subs as $sub) {
            
                Answer::create([
                    'survey_id' => 1,
                    'entry_id' => $participant->id,
                    'question_id' => 8,
                    'gender' => $this->data['gender'],
                    'value' => $sub->id,
                ]);
            }
        }
    }

}
