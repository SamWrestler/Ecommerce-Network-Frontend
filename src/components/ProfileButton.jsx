'use client'
import Link from 'next/link'
import Icons from '@/components/Icons'
import { usePathname } from 'next/navigation'

export default function ProfileButton({ href, closeModal, text, icon }) {
    const pathName = usePathname()
    return (
        <Link
            scroll={false}
            href={href}
            onClick={closeModal}
            className={`flex justify-between items-center w-full py-2 px-1 rounded-md ${pathName === href && 'bg-gray-50'}`}>
            <div className="flex items-center gap-2">
                <div className="w-[3.2rem] h-[3.2rem] flex items-center justify-center bg-bgInput rounded-full">
                    <Icons name={icon} className="text-[20px]" />
                </div>
                <h2 className="font-medium text-[18px]">{text}</h2>
            </div>
            <Icons name="chevronLeft" className="text-[20px]" />
        </Link>
    )
}
