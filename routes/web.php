<?php

use Illuminate\Support\Facades\Route;
use App\Models\LearningClass;
use App\Models\Subject;
use App\Models\Answer;
use App\Models\Entry;
use App\Models\Survey;
use App\Jobs\ProcessAnswers;
use Illuminate\Support\Facades\RateLimiter;

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

    // To prevent concurrency issues, all submissions will go to a queue and get processed accordingly

    dispatch(new ProcessAnswers(request()->all()))->onQueue('default');

    return redirect('/')->with('toast', [
        'message' => 'Obrigado por ter submetido a sua resposta'
    ]);
})->middleware(['throttle:participate_in_survey']);
