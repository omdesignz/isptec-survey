<?php

use Illuminate\Support\Facades\Route;
use App\Models\LearningClass;
use App\Models\Subject;
use App\Models\Answer;
use App\Models\Entry;
use App\Models\Survey;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return inertia('Questionnaire');
});

Route::get('/resultados', function () {
    return inertia('Result', [
        'entries' => function() {
            return Entry::count();
        },
        'gender_m' => function() {
            return Entry::where('gender', 'M')->count();
        },
        'gender_f' => function() {
            return Entry::where('gender', 'F')->count();
        },
        'no_delays' => function() {
            return collect(Answer::with('question', 'class', 'subject')->cursor()
            ->where('question_id', 3))->groupBy(function($item) {
              return $item->value;
          })->map(function($item) {
              return [
                  'id' => $item->first()->subject->id,
                  'subject' => $item->first()->subject->name,
                'total' => $item->count()
              ];
          })->sortByDesc('total')->values()->take(8);
        },
        'few_delays' => function() {
            return collect(Answer::with('question', 'class', 'subject')->cursor()
            ->where('question_id', 4))->groupBy(function($item) {
              return $item->value;
          })->map(function($item) {
              return [
                  'id' => $item->first()->subject->id,
                  'subject' => $item->first()->subject->name,
                'total' => $item->count()
              ];
          })->sortByDesc('total')->values()->take(8);
        },
        'lots_of_delays' => function() {
            return collect(Answer::with('question', 'class', 'subject')->cursor()
            ->where('question_id', 5))->groupBy(function($item) {
              return $item->value;
          })->map(function($item) {
              return [
                  'id' => $item->first()->subject->id,
                  'subject' => $item->first()->subject->name,
                'total' => $item->count()
              ];
          })->sortByDesc('total')->values()->take(8);
        },
        'no_absences' => function() {
            return collect(Answer::with('question', 'class', 'subject')->cursor()
            ->where('question_id', 6))->groupBy(function($item) {
              return $item->value;
          })->map(function($item) {
              return [
                  'id' => $item->first()->subject->id,
                  'subject' => $item->first()->subject->name,
                'total' => $item->count()
              ];
          })->sortByDesc('total')->values()->take(8);
        },
        'few_absences' => function() {
            return collect(Answer::with('question', 'class', 'subject')->cursor()
            ->where('question_id', 7))->groupBy(function($item) {
              return $item->value;
          })->map(function($item) {
              return [
                  'id' => $item->first()->subject->id,
                  'subject' => $item->first()->subject->name,
                'total' => $item->count()
              ];
          })->sortByDesc('total')->values()->take(8);
        },
        'lots_of_absences' => function() {
            return collect(Answer::with('question', 'class', 'subject')->cursor()
            ->where('question_id', 8))->groupBy(function($item) {
              return $item->value;
          })->map(function($item) {
              return [
                  'id' => $item->first()->subject->id,
                  'subject' => $item->first()->subject->name,
                'total' => $item->count()
              ];
          })->sortByDesc('total')->values()->take(8);
        },
        'classes' => function() {
            return collect(Answer::with('question', 'class')->cursor()
            ->where('question_id', 2))->groupBy(function($item) {
              return $item->value;
          })->map(function($item) {
              return [
                  'id' => $item->first()->class->id,
                  'class' => $item->first()->class->name,
                    'total' => $item->count()
              ];
          })->sortByDesc('total')->values()->take(8);
        }
    ]);
})->middleware('auth.basic');

Route::get('/participar', function () {
    return inertia('Survey', [
        'classes' => LearningClass::all()->collect()->map(function($item) {
            return [
                'value' => $item->id,
                'label' => $item->name,
            ];
        }),
        'subjects' => Subject::all(),
    ]);
});

Route::post('/surveys', function () {
    request()->validate([
        'class' => ['required', 'exists:classes,id'],
        'gender' => ['required'],
        'no_delays' => 'required|array|min:1|max:8',
        'few_delays' => 'required|array|min:1|max:8',
        'lots_of_delays' => 'required|array|min:1|max:8',
        'no_absences' => 'required|array|min:1|max:8',
        'few_absences' => 'required|array|min:1|max:8',
        'lots_of_absences' => 'required|array|min:1|max:8',
    ],[], [
        'class' => 'Turma',
        'gender' => 'Gênero',
        'no_delays' => 'Sem atrasos',
        'few_delays' => 'Poucos atrasos',
        'lots_of_delays' => 'Muitos atrasos',
        'no_absences' => 'Sem faltas',
        'few_absences' => 'Poucas faltas',
        'lots_of_absences' => 'Muitas faltas',
    ]);

    // Create Entry
    $participant = Entry::create([
        'survey_id' => 1,
        'participant_id' => null,
        'gender' => request()->gender,
    ]);

    // Gender Answer

    $gAnswers = Answer::create([
        'survey_id' => 1,
        'entry_id' => $participant->id,
        'question_id' => 1,
        'gender' => null,
        'value' => request()->gender,
    ]);

    // Class Answer
    $cAnswers = Answer::create([
        'survey_id' => 1,
        'entry_id' => $participant->id,
        'question_id' => 2,
        'gender' => null,
        'value' => request()->class,
    ]);

    // Punctuality Answer - No delays 

    if(count(request()->no_delays) > 0) {
        
        $subs = Subject::whereIn('id', request()->no_delays)->get();

        foreach($subs as $sub) {
        
            Answer::create([
                'survey_id' => 1,
                'entry_id' => $participant->id,
                'question_id' => 3,
                'gender' => request()->gender,
                'value' => $sub->id,
            ]);
        }
    }

    if(count(request()->few_delays) > 0) {
        
        $subs = Subject::whereIn('id', request()->few_delays)->get();

        foreach($subs as $sub) {
        
            Answer::create([
                'survey_id' => 1,
                'entry_id' => $participant->id,
                'question_id' => 4,
                'gender' => request()->gender,
                'value' => $sub->id,
            ]);
        }
    }

    if(count(request()->lots_of_delays) > 0) {
        
        $subs = Subject::whereIn('id', request()->lots_of_delays)->get();

        foreach($subs as $sub) {
        
            Answer::create([
                'survey_id' => 1,
                'entry_id' => $participant->id,
                'question_id' => 5,
                'gender' => request()->gender,
                'value' => $sub->id,
            ]);
        }
    }

    // Absences Answer - No absences
    if(count(request()->no_absences) > 0) {
        
        $subs = Subject::whereIn('id', request()->no_absences)->get();

        foreach($subs as $sub) {
        
            Answer::create([
                'survey_id' => 1,
                'entry_id' => $participant->id,
                'question_id' => 6,
                'gender' => request()->gender,
                'value' => $sub->id,
            ]);
        }
    }

    if(count(request()->few_absences) > 0) {
        
        $subs = Subject::whereIn('id', request()->few_absences)->get();

        foreach($subs as $sub) {
        
            Answer::create([
                'survey_id' => 1,
                'entry_id' => $participant->id,
                'question_id' => 7,
                'gender' => request()->gender,
                'value' => $sub->id,
            ]);
        }
    }

    if(count(request()->lots_of_absences) > 0) {
        
        $subs = Subject::whereIn('id', request()->lots_of_absences)->get();

        foreach($subs as $sub) {
        
            Answer::create([
                'survey_id' => 1,
                'entry_id' => $participant->id,
                'question_id' => 8,
                'gender' => request()->gender,
                'value' => $sub->id,
            ]);
        }
    }

    return redirect('/')->with('toast', [
        'message' => 'Obrigado por ter submetido a sua resposta'
    ]);
});
