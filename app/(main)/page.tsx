'use client'

import Image from 'next/image'
import Link from 'next/link'
import AppLogo from '@/public/assets/images/logo.svg'
import useAxios from 'axios-hooks'

interface PeopleResponse {
  id: number
  full_name: string
  full_address: string | null
  nomination: string | null
  avatar: string | null
  contacts: Contact[]
}

interface Contact {
  people_id: number
  type: string
  value: string
}

export default function Home() {
  const [{ data, loading, error }] = useAxios<PeopleResponse[]>({
    baseURL: 'https://api.ganba.org',
    url: '/v1/peoples',
    params: {
      fields: {
        peoples: 'id,full_name,full_address,nomination,avatar',
        contacts: 'people_id,type,value',
      },
      include: 'contacts',
    },
  })

  return (
    <>
      <h1 className="text-center text-3xl font-bold my-8">Чорний список</h1>
      <h2 className="block text-red-300 text-center">Особи, які підтримують путіна та війну проти України</h2>
      <div className="text-right">
        <small className="inline-block py-2 px-4 bg-blue-600/10 rounded-full cursor-pointer">Сортувати&nbsp;&nbsp;↕️</small>
      </div>
      <section>
        <div className="grid md:grid-cols-4 gap-8">
          {loading && <p>Loading...</p>}
          {!!error && <p>Error!</p>}
          {!!data && data.map((people: PeopleResponse, index: any) => (
            <article key={index} className="relative p-5">
              <Link
                href={`/black-list/${people.id}`}
                className="grid gap-1 after:bg-blue-600/10 after:rounded-lg after:absolute after:right-0 after:left-0 after:bottom-0 after:top-20 hover:after:top-16 after:transition-all after:-z-10 group"
              >
                <Image
                  height={192}
                  width={192}
                  className="rounded-xl mb-4 object-cover m-auto" src={`/storage/${people.avatar}`}
                  alt={people.full_name} />

                <h4 className="transition-all text-blue-600 dark:text-yellow-400 group-hover:text-red-600 group-hover:dark:text-red-400">
                  {people.full_name}
                </h4>
              </Link>
              <div>
                <h5 className="text-sm mb-2">{people.full_address}</h5>
                <div className="text-sm dark:text-sky-300">{people.nomination}</div>
                {people.contacts && (
                  <div className="mt-3 flex flex-wrap items-center justify-start gap-2">
                    {people.contacts.map((contact: Contact, index: any) => (
                      <Link key={index} href={contact.value} target="_blank">
                        <Image width={20} height={20} className="hover:scale-105 transition-all" src={`/assets/images/icon_${contact.type}.svg`} alt="" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="bg-blue-600/10 p-8 flex gap-10 flex-wrap my-4 rounded-2xl">
        <Image height={96} width={96} src={AppLogo} alt="logo" priority />
        <div>
          <p className="mb-4">Центр “Ганьба Deaf” є незалежною недержавною організацією. Вона створена групою
            активістів, нечуючими блогерами та спеціалістами з питань дослідження ознак злочинів проти національної
            безпеки України. Направлена на боротьбу проти інформаційної агресії, порушення миру в Україні та
            дезінформації.</p>
          <p>За інформаційною підтримкою активістів Центру “Ганьба Deaf” створено цей однойменний сайт, який є
            незалежним державним ЗМІ (Засобом Масової Інформації).</p>
        </div>
      </div>
    </>
  )
}
