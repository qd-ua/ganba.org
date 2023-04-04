<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="bg-sky-100 dark:bg-[#012346] text-sky-800 dark:text-blue-200">

<head>
    <title>{{ config('app.name') }}</title>
    <meta charset="UTF-8" lang="uk_UA">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="description"
        content="Центр “Ганьба Deaf” є незалежною недержавною організацією. Вона створена групою активістів.">
    <meta name="author" content="Ganba Deaf">
    <meta name="application-name" content="Ганьба Deaf">
    <meta name="msapplication-TileColor" content="#e2f0ff">
    <meta name="theme-color" content="#e2f0ff">
    <meta name="apple-mobile-web-app-status-bar-style" content="#e2f0ff">
    <meta property="og:image" content="/assets/images/ganba.png">
    <meta name="image" content="/assets/images/ganba.png">
    <meta itemprop="image" content="/assets/images/ganba.png">
    <meta name="twitter:image" content="/assets/images/ganba.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/x-icon">
    <link rel="image_src" href="/assets/images/ganba.png">
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="p-6">
    <header
        class="max-w-6xl m-auto bg-white dark:bg-[#01162b70] mb-4 rounded-xl py-4 px-10 flex flex-wrap gap-4 justify-between items-center relative overflow-hidden shadow-xl shadow-sky-500/10 dark:shadow-black/10">
        <a href="{{ route('home') }}" class="flex items-center gap-2 cursor-pointer">
            <img class="w-16 h-16" src="{{ asset('/images/logo.svg') }}" alt="logo" />
            <span class="text-2xl font-bold leading-7 text-blue-800 dark:text-yellow-400">Ганьба<br />Deaf</span>
        </a>

        <nav>
            <ul class="flex flex-wrap gap-4 text-blue-600 dark:text-yellow-400">
                <li>
                    <a href="{{ route('home') }}" class="hover:text-yellow-600 dark:hover:text-blue-300">Головна</a>
                </li>
                <li>
                    <a href="{{ route('about') }}" class="hover:text-yellow-600 dark:hover:text-blue-300">Про центр</a>
                </li>
                <li>
                    <a href="{{ route('donate') }}" class="hover:text-yellow-600 dark:hover:text-blue-300">Підтримати проект</a>
                </li>
            </ul>
        </nav>

        <a class="bg-blue-600 hover:bg-blue-500 p-4 rounded-2xl shadow-xl scale-100 hover:scale-105 transition-all text-sky-200"
            href="//docs.google.com/forms/d/e/1FAIpQLSf8hjl0FvGTDzm3NyOMIoXgIniJOCXkhOsUTRZOcEHbf0fK0A/viewform"
            target="_blank">
            Додати злочинця
        </a>

        <div class="flex items-center gap-4">
            <a href="//instagram.com/ganbadeaf" class="group" target="_blank">
                <img class="w-6 scale-100 hover:scale-105 transition-all" src="{{ asset('/images/icon_insta.svg') }}"
                    alt="icon_instagram" />
            </a>
            <a href="//t.me/ganbadeaf" class="group" target="_blank">
                <img class="w-6 scale-100 hover:scale-105 transition-all" src="{{ asset('/images/icon_tg.svg') }}"
                    alt="icon_telegram" />
            </a>
        </div>

        <div class="absolute -right-6 -top-1 h-8 w-20 rotate-45 bg-[linear-gradient(#2563eb_50%,#facc15_50%)]"></div>
    </header>

    <main class="max-w-6xl mx-auto my-10">
        {{ $slot }}
    </main>

    <footer>
        <div class="max-w-6xl mx-auto my-10 border-t-2 border-blue-600/20">
            <div class="text-center text-2xl font-bold my-4">
                🇺🇦 Все буде Україна!
            </div>
            <div class="text-center">
                &copy; 2023 Ганьба Deaf —
                <a class="text-blue-600 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-blue-300"
                    href="mailto:ganbadeaf@gmail.com" target="_blank">📮 Для зв'язку</a>
            </div>
        </div>
    </footer>

    @stack('scripts')
</body>

</html>
