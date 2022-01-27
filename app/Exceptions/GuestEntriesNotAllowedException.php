<?php

namespace App\Exceptions;

use Exception;

class GuestEntriesNotAllowedException extends Exception
{
    protected $message = 'Login is required for this survey.';
}
