'use client'

import Image from 'next/image'
import Link from 'next/link'
import useAxios from 'axios-hooks'

interface PeopleResponse {
  id: number
  full_name: string
  full_address: string | null
  dob: Date
  nomination: string | null
  avatar: string | null
  contacts: Contact[]
  files: File[]
}

interface Contact {
  people_id: number
  type: string
  value: string
}

interface File {
  people_id: number
  type: string
  path: string
}

export default function BlackList({ params }: any) {
  const [{ data, loading, error }] = useAxios<PeopleResponse>({
    baseURL: 'https://api.ganba.org',
    url: `/v1/peoples/${parseInt(params.id)}`,
    params: {
      fields: {
        peoples: 'id,full_name,full_address,dob,nomination,avatar',
        contacts: 'people_id,type,value',
        files: 'people_id,type,path',
      },
      include: 'contacts,files',
    },
  })

  if (loading) {
    return <p>Loading...</p>
  }

  if (!!error || !data) {
    return <p>Error!</p>
  }

  const images = data.files.filter((file: any) => file.type == 'image')

  const videos = data.files.filter((file: any) => file.type == 'video')

  return (
    <div className="my-10 flex flex-wrap gap-10">
      <div className="w-72">
        <Image height={288} width={288} className="rounded-xl mb-4 object-cover lightbox-img" data-gallery="gallery" src={`/storage/${data.avatar}`} alt="" />

        {data.files && (
            <div className="grid gap-2">
              <div className="flex flex-wrap gap-2">
                {images.map((file: File, index: any) => (
                  <Image key={index} height={64} width={64} className="hover:scale-105 transition-all rounded-lg mb-4 object-cover" data-gallery="gallery" src={`/storage/${file.path}`} alt="" />
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {videos.map((file: File, index: any) => (
                  <div
                    key={index}
                    className="hover:scale-105 transition-all h-16 w-16 bg-blue-500 rounded-lg grid place-items-center"
                    data-video-src={`https://api.ganba.org/storage/${file.path}`}
                  >
                    📹
                  </div>
                ))}
              </div>
            </div>
          )}
      </div>

      <div className="flex flex-col gap-2">
        {data.full_name && (
          <h1>{data.full_name}</h1>
        )}

        {data.nomination && (
          <div className="text-sm dark:text-sky-300 flex items-center gap-2">{data.nomination}</div>
        )}

        {data.full_address && (
          <div className="text-sm mb-2 flex items-center gap-2">📍 {data.full_address}</div>
        )}

        {data.dob && (
          <div className="flex items-center gap-2">📅 {data.dob.toString()}</div>
        )}

        {data.contacts.map((contact: Contact, index: any) => (
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
  )
}