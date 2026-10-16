<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        // O Render recebe o site por HTTPS e repassa para o Laravel como HTTP.
        // Esta linha garante que os links (CSS, JS, imagens) saiam como https://.
        if ($this->app->environment('production')) {
            URL::forceScheme('https');
        }
    }
}
