'use client'

import Image from 'next/image'
import AppLogo from '@/public/assets/images/logo.svg'

export default function Page() {
    return (
        <>
            <h1 className="text-center text-3xl font-bold my-8">Про центр</h1>
            <section className="text-lg">
                <div className="flex gap-10 items-start">
                    <Image width={128} src={AppLogo} alt="logo" />
                    <div>
                        <p className="mb-4">
                            Війна Росії проти України: обстріл мирних жителів, руйнування міст, терор українців.
                        </p>
                        <p className="mb-4">
                            Глухі “недоблогери” активно поширюють дезінформацію, чим посилюють ворожість проти України.
                            Пропаганда серед своїх підписників “путінізму” розпалює ненависть до українців, схвалює геноцид
                            нації та спонукає до терору. Інформаційна війна має глобальний характер. Ми маємо це зупинити. Адже
                            разом ми – сила.
                        </p>
                        <p>
                            Незалежний Центр “Ганьба Deaf” працює над виявленням агресивних виказувань проти України. Нечуючі
                            блогери, які ведуть проросійську інформаційну пропаганду та дезінформацію подій війни в Україні
                            мають бути внесені до “чорного списку”.
                        </p>
                    </div>
                    <video className="max-w-sm rounded-2xl shadow-xl" poster="assets/images/about.jpg">
                        <source src="assets/video/about.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
        </>
    )
}