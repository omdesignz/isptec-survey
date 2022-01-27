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
        'genders' => function() {
            return collect(Answer::with('question')->cursor()
            ->where('question_id', 1))->groupBy(function($item) {
                return $item->value;
            })->map(function($item) {
                return [
                    'gender' => $item[0]->value,
                    'total' => $item->count()
                ];
            })->sortByDesc('total')->values()->take(2);
        },
        'subjects' => function() {
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
        'subjects' => 'required|array|min:1|max:8',
    ],[], ['subjects' => 'Unidade Curricular', 'class' => 'Turma', 'gender' => 'Gênero']);

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

    // Subjects Answer

    $subs = Subject::whereIn('id', request()->subjects)->get();

    foreach($subs as $sub) {
        
        Answer::create([
            'survey_id' => 1,
            'entry_id' => $participant->id,
            'question_id' => 3,
            'gender' => null,
            'value' => $sub->id,
        ]);
    }

    return redirect('/')->with('toast', [
        'message' => 'Obrigado por ter submetido a sua resposta'
    ]);
});
