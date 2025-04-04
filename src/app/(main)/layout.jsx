'use client'
import React from 'react'
import BottomNavbar from '@/components/BottomNavbar'
import { usePathname } from 'next/navigation'
import useWindowSize from '@/hooks/useWindowSize'
import Header from '@/components/Header'

function MainLayout({ children }) {
    const pathName = usePathname()
    const isProductPage = /^\/products\/\d+$/.test(pathName)
    const isProfile = /^\/profile\/.+$/.test(pathName) // Match any path starting with /profile/
    const { isDesktop } = useWindowSize()
    return (
        <>
            {isDesktop && <Header />}
            {!isDesktop && pathName === '/' && <Header />}
            {children}
            {/* Show BottomNavbar except for /profile/*, /products/* and /cart */}
            {!isProductPage && pathName !== '/cart' && !isProfile && (
                <BottomNavbar />
            )}
        </>
    )
}

export default MainLayout
