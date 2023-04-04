<x-layout>
    <section>
        <div class="my-10 flex flex-wrap gap-10">
            <div class="w-72">
                <img class="rounded-xl mb-4 h-72 w-72 object-cover lightbox-img" data-gallery="gallery" src="/storage/{{ $item->avatar }}">
                <div class="grid gap-2">
                    <div class="flex flex-wrap gap-2">
                        @foreach ($item->files->where('type', 'image') as $file)
                            <img class="hover:scale-105 transition-all rounded-lg mb-4 h-16 w-16 object-cover" data-gallery="gallery" src="/storage/{{ $file->path }}">
                        @endforeach
                    </div>
                    <div class="flex flex-wrap gap-2">
                        @foreach ($item->files->where('type', 'video') as $file)
                            <div class="hover:scale-105 transition-all h-16 w-16 bg-blue-500 rounded-lg grid place-items-center" data-video-src="/storage/{{ $file->path }}">📹</div>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <h1>{{ $item->full_name }}</h1>
                <div class="text-sm dark:text-sky-300 flex items-center gap-2">{{ $item->nomination }}</div>
                <div class="text-sm mb-2 flex items-center gap-2">📍 {{ $item->full_address }}</div>
                <div class="flex items-center gap-2">📅 {{ $item->dob }}</div>
                @foreach ($item->contacts as $contact) 
                        <a class="flex items-center gap-2 group text-blue-800 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-blue-300 text-ellipsis overflow-hidden" href="{{ $contact->value }}" target="_blank">
                            <img src="{{ asset('/images/icon_'.$contact->type.'.svg') }}" alt="" class="hover:scale-105 transition-all w-5 h-5">
                            {{ $contact->value }}
                        </a>
                @endforeach
            </div>
        </div>
    </section>

    @push('scripts')
        <script src="/js/lite.js"></script>
    @endpush
</x-layout>