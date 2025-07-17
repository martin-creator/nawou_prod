<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }} - Site Under Maintenance</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
        <link rel="icon" href="{{ asset('logo.png') }}" type="image/png">

        <style>
            body { text-align: center; padding: 50px; font-family: Arial, sans-serif; }
            h1 { font-size: 50px; }
            body { background-color: #f8fafc; color: #636b6f; }
        </style>

    </head>
    <body class="antialiased">
        <h1>We'll be back soon!</h1>
        <p>We are currently performing maintenance. Please check back later.</p>
    </body>
</html>

