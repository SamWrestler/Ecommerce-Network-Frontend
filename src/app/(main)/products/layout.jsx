// import BottomNavbar from '@/components/BottomNavbar'
'use client'
import AddToCart from '@/components/AddToCart'
import Header from '@/components/Header'
import ProductNavbar from '@/components/ProductNavbar'
import useWindowSize from '@/hooks/useWindowSize'
import { usePathname } from 'next/navigation'
import React from 'react'

function MainLayout({ children }) {
    const {isDesktop} = useWindowSize()
    const pathName = usePathname()
    return (
        <>
            {isDesktop ? <Header />: <ProductNavbar />}
            {children}
            {!isDesktop && pathName !== "/products" &&  <AddToCart />}
        </>
    )
}

export default MainLayout
