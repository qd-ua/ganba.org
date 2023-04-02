<x-layout>
    <h1 class="text-center text-3xl font-bold my-8">Чорний список</h1>
    <h2 class="block text-red-300 text-center">Особи, які підтримують путіна та війну проти України</h2>
    <div class="text-right">
        <small class="inline-block py-2 px-4 bg-blue-600/10 rounded-full cursor-pointer">Сортувати&nbsp;&nbsp;↕️</small>
    </div>
    <section>
        <div class="grid grid-cols-4 mb-6 justify-around gap-6">
            @foreach ($items as $item)
                <div class="box-border p-0 m-0">
                <article class="block relative p-6">
                    <a href="/black-list/{{ $item->id }}" class="relative z-[2]">
                        <img class=" ls-is-cached lazyloaded" width="222" height="222" alt="" src="{{ asset('storage/' . $item->avatar) }}">
                    </a>
                <div class="infoUser">
                    <a href="/black-list/53" class="">
                        <h4>{{ $item->full_name }}</h4></a>
                        <h5 class="itemCity">{{ $item->full_address }}</h5>
                        <small>{{ $item->nomination }}</small>
                        @if ($item->contacts)
                            <div class="social">
                                @foreach ($item->contacts as $contact)
                                    <a href="{{ $contact->value }}" target="_blank" class="icon {{ $contact->type }}">
                                        <b></b>
                                    </a>
                                @endforeach
                            </div>
                        @endif
                    </div>
                </article>
                </div>
            @endforeach
        </div>
    </section>
    <div class="bg-blue-600/10 p-8 flex gap-10 my-4 rounded-2xl">
        <img src="/assets/images/logo.svg" alt="" class="w-24" />
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
