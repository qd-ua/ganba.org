<x-layout>
    <section>
        <div class="fullList">
            <div class="media">
                <div class="fullImage">
                    <img class="mklbItem" data-gallery="gallery" src="{{ asset('storage/' . $item->avatar) }}">
                </div>
                <div class="rowMedia">
                    <div class="photoGallery">
                        @foreach ($item->files as $file)
                            <img class="mklbItem" data-gallery="gallery" src="{{ asset('storage/' . $file->value) }}">
                        @endforeach
                    </div>
                    <div class="videoGallery">
                        @foreach ($item->files as $file)
                            <div class="mklbItem" data-video-src="{{ asset('storage/' . $file->value) }}"></div>
                        @endforeach
                    </div>
                </div>
            </div>
            <div class="infoUser">
                <h1>{{ $item->full_name }}</h1>
                <h3>{{ $item->nomination }}</h3>
                <div class="icon city">
                    <b>📍</b>
                    <span>{{ $item->full_address }}</span>
                </div>
                <div class="icon dr">
                    <b>📅</b>
                    <span>{{ $item->dob }}</span>
                </div>
                @foreach ($item->contacts as $contact)
                    <div class="icon {{ $item->type }}">
                        <b></b>
                        <a target="_blank" href="{{ $item->value }}">{{ $item->value }}</a>
                    </div>
                @endforeach
            </div>
        </div>
    </section>
</x-layout>