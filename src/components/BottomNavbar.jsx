'use client'
import React, { useEffect, useState } from 'react'
import Icons from './Icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavigateToTop from './NavigateToTop'
function BottomNavbar() {
    const [scrolled, setScrolled] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const pathName = usePathname()
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }

            if (window.scrollY > lastScrollY) {
                setScrolled(false)
            } else {
                setScrolled(true)
            }

            setLastScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    return (
        <>
        <NavigateToTop scrolled={scrolled}/>
        <nav className={`flex z-40 fixed bg-bgPrimary w-full bottom-0 font-light shadow-custom items-center  font-font flex-row-reverse transition-all duration-25 ${!scrolled ? "translate-y-full" : "translate-y-0"}`}>
            <Link
                href="/"
                className={`flex flex-col w-1/4 py-3 ${pathName === '/' && 'navbarActive'} items-center justify-center gap-1`}>
                <Icons name="home" className="text-[27px]" />
                <h2>خانه</h2>
            </Link>
            <Link
                href="/products"
                className={`flex flex-col w-1/4 py-3 ${pathName === '/products' && 'navbarActive'} items-center justify-center gap-1`}>
                <Icons name="shoppingBags" className="text-[27px]" />
                <h2>فروشگاه</h2>
            </Link>
            <Link
                href="/cart"
                className={`flex flex-col w-1/4 py-3 ${pathName === '/cart' && 'navbarActive'} items-center justify-center gap-1`}>
                <Icons name="shoppingBag" className="text-[27px]" />
                <h2>سبد خرید</h2>
            </Link>
            <div
                className={`flex flex-col w-1/4 py-3 ${pathName === '/profile' && 'navbarActive'} items-center justify-center gap-1`}>
                <Icons name="user" className="text-[27px] fa-thin" />
                <h2>پروفایل</h2>
            </div>
        </nav></>
    )
}

export default BottomNavbar
