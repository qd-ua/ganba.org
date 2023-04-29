import Link from 'next/link'
import Image from 'next/image'
import AppLogo from '@/public/assets/images/logo.svg'
import InstagramIcon from '@/public/assets/images/icon_insta.svg'
import TelegramIcon from '@/public/assets/images/icon_tg.svg'

const navLinks = [
  { title: 'Головна', url: '/' },
  { title: 'Про центр', url: '/about' },
  { title: 'Підтримати проект', url: '/donate' },
]

const contacts = [
  {
    url: '//instagram.com/ganbadeaf',
    image: <Image width={24} className="scale-100 hover:scale-105 transition-all" src={InstagramIcon} alt="icon_instagram" priority />
  },
  {
    url: '//t.me/ganbadeaf',
    image: <Image width={24} className="scale-100 hover:scale-105 transition-all" src={TelegramIcon} alt="icon_telegram" priority />
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="max-w-6xl m-auto bg-white dark:bg-[#01162b70] mb-4 rounded-xl py-4 px-10 flex flex-wrap gap-4 justify-between items-center relative overflow-hidden shadow-xl shadow-sky-500/10 dark:shadow-black/10">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image height={64} width={64} src={AppLogo} alt="logo" priority />
          <span className="text-2xl font-bold leading-7 text-blue-800 dark:text-yellow-400">
            Ганьба<br />Deaf
          </span>
        </Link>

        <nav>
          <ul className="flex flex-wrap gap-4 text-blue-600 dark:text-yellow-400">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.url} className="hover:text-yellow-600 dark:hover:text-blue-300">{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className="bg-blue-600 hover:bg-blue-500 p-4 rounded-2xl shadow-xl scale-100 hover:scale-105 transition-all text-sky-200"
          href="//docs.google.com/forms/d/e/1FAIpQLSf8hjl0FvGTDzm3NyOMIoXgIniJOCXkhOsUTRZOcEHbf0fK0A/viewform"
          target="_blank"
        >
          Додати злочинця
        </Link>

        <div className="flex items-center gap-4">
          {contacts.map((item, index) => (
            <Link key={index} href={item.url} className="group" target="_blank">
              {item.image}
            </Link>
          ))}
        </div>

        <div className="absolute -right-6 -top-1 h-8 w-20 rotate-45 bg-[linear-gradient(#2563eb_50%,#facc15_50%)]"></div>
      </header>

      <main className="max-w-6xl mx-auto my-10">
        {children}
      </main>

      <footer>
        <div className="max-w-6xl mx-auto my-10 border-t-2 border-blue-600/20">
          <div className="text-center text-2xl font-bold my-4">
            🇺🇦 Все буде Україна!
          </div>
          <div className="text-center">
            &copy; 2023 Ганьба Deaf —
            <Link className="text-blue-600 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-blue-300" href="mailto:ganbadeaf@gmail.com">
              {'📮 Для зв\'язку'}
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
