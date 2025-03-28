// import BottomNavbar from '@/components/BottomNavbar'
'use client'
import AddToCart from '@/components/AddToCart'
import TopNavbar from '@/components/TopNavbar'
import useWindowSize from '@/hooks/useWindowSize'
import { usePathname } from 'next/navigation'
import React from 'react'

function MainLayout({ children }) {
    const { isDesktop } = useWindowSize()
    const pathName = usePathname()
    return (
        <>
            {!isDesktop && <TopNavbar title="جزئیات محصول" />}
            {children}
            {!isDesktop && pathName !== '/products' && <AddToCart />}
        </>
    )
}

export default MainLayout
