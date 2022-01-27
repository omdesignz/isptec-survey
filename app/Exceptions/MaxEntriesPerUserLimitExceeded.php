<?php

namespace App\Exceptions;

use Exception;

class MaxEntriesPerUserLimitExceeded extends Exception
{
    protected $message = 'Maximum entries per user exceeded.';
}
