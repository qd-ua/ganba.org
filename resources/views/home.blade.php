<x-layout>
    <h1 class="text-center text-3xl font-bold my-8">Чорний список</h1>
    <h2 class="block text-red-300 text-center">Особи, які підтримують путіна та війну проти України</h2>
    <div class="text-right">
        <small class="inline-block py-2 px-4 bg-blue-600/10 rounded-full cursor-pointer">Сортувати&nbsp;&nbsp;↕️</small>
    </div>
    <section>
        <div class="grid md:grid-cols-4 gap-8">
            @foreach ($items as $item)
            <article class="relative p-5">
                <a href="{{ route('black-list.show', $item) }}" class="grid gap-1 after:bg-blue-600/10 after:rounded-lg after:absolute after:right-0 after:left-0 after:bottom-0 after:top-20 hover:after:top-16 after:transition-all after:-z-10 group">
                    <img class="rounded-xl mb-4 h-48 w-48 object-cover m-auto" alt="" src="/storage/{{ $item->avatar }}">
                    <h4 class="transition-all text-blue-600 dark:text-yellow-400 group-hover:text-red-600 group-hover:dark:text-red-400">{{ $item->full_name }}</h4>
                </a>
                <div>
                    <h5 class="text-sm mb-2">{{ $item->full_address }}</h5>
                    <div class="text-sm dark:text-sky-300">{{ $item->nomination }}</div>
                    @if ($item->contacts)
                    <div class="mt-3 flex flex-wrap items-center justify-start gap-2">
                        @foreach ($item->contacts as $contact)
                            <a href="{{ $contact->value }}" target="_blank">
                                <img src="{{ asset('images/icon_'.$contact->type.'.svg') }}" alt="" class="hover:scale-105 transition-all w-5 h-5">
                            </a>
                        @endforeach
                    </div>
                    @endif
                </div>
            </article>
            @endforeach
        </div>
    </section>
    <div class="bg-blue-600/10 p-8 flex gap-10 flex-wrap my-4 rounded-2xl">
        <img src="{{ asset('/images/logo.svg') }}" alt="" class="w-24" />
        <div>
            <p class="mb-4">Центр “Ганьба Deaf” є незалежною недержавною організацією. Вона створена групою
                активістів, нечуючими блогерами та спеціалістами з питань дослідження ознак злочинів проти національної
                безпеки України. Направлена на боротьбу проти інформаційної агресії, порушення миру в Україні та
                дезінформації.</p>
            <p>За інформаційною підтримкою активістів Центру “Ганьба Deaf” створено цей однойменний сайт, який є
                незалежним державним ЗМІ (Засобом Масової Інформації).</p>
        </div>
    </div>
</x-layout>
