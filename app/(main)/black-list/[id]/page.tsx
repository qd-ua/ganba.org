import { usePeopleWithFilesContacts } from '@/src/services/people-service'
import Image from 'next/image'
import Link from 'next/link'

export default async function BlackList({ params }: any) {
  const people = await usePeopleWithFilesContacts(parseInt(params.id))

  if (!people) {
    return "No found people!"
  }

  const images = people.files.filter((file: any) => file.type == 'image')

  const videos = people.files.filter((file: any) => file.type == 'video')

  return (
    <section>
      <div className="my-10 flex flex-wrap gap-10">
        <div className="w-72">
          <Image height={288} width={288} className="rounded-xl mb-4 object-cover lightbox-img" data-gallery="gallery" src={`/storage/${people.avatar}`} alt="" />

          {people.files && (
            <div className="grid gap-2">
              <div className="flex flex-wrap gap-2">
                {images.map((file: any, index: any) => (
                  <Image key={index} height={64} width={64} className="hover:scale-105 transition-all rounded-lg mb-4 object-cover" data-gallery="gallery" src={`/storage/${file.path}`} alt="" />
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {videos.map((file: any, index: any) => (
                  <div
                    key={index}
                    className="hover:scale-105 transition-all h-16 w-16 bg-blue-500 rounded-lg grid place-items-center"
                    data-video-src={`/storage/${file.path}`}
                  >
                    📹
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {people.fullName && (
            <h1>{people.fullName}</h1>
          )}

          {people.nomination && (
            <div className="text-sm dark:text-sky-300 flex items-center gap-2">{people.nomination}</div>
          )}

          {people.fullAddress && (
            <div className="text-sm mb-2 flex items-center gap-2">📍 {people.fullAddress}</div>
          )}

          {people.dob && (
            <div className="flex items-center gap-2">📅 {people.dob.toString()}</div>
          )}

          {people.contacts.map((contact: any, index: any) => (
            <Link
              key={index}
              className="flex items-center gap-2 group text-blue-800 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-blue-300 text-ellipsis overflow-hidden"
              href="{{ $contact->value }}"
              target="_blank"
            >
              <Image
                width={20}
                height={20}
                src={`/assets/images/icon_${contact.type}.svg`}
                className="hover:scale-105 transition-all"
                alt="" />
              {contact.value}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}