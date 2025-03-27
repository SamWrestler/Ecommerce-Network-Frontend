'use client'
import React from 'react'
import BottomNavbar from '@/components/BottomNavbar'
import { usePathname } from 'next/navigation'
import useWindowSize from '@/hooks/useWindowSize'
import Header from '@/components/Header'
function MainLayout({ children }) {
    const pathName = usePathname()
    const isProductPage = /^\/products\/\d+$/.test(pathName)
    const {isDesktop} = useWindowSize()
    return (
        <>
            {isDesktop && <Header />}
            {children}
            {!isProductPage && pathName !== "/cart" && <BottomNavbar />}
        </>
    )
}

export default MainLayout
