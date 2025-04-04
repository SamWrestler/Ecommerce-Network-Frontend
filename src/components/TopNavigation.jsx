'use client'
import React from 'react'
import { Search } from './Search'
import NavLinks from './NavLinks'
import useWindowSize from '@/hooks/useWindowSize'
import HeaderProfilePicture from '@/components/HeaderProfilePicture'
import HeaderCart from '@/components/HeaderCart'
import Notifications from '@/components/Notifications'
import Link from 'next/link'

function TopNavigation() {
    const { isTablet, isDesktop } = useWindowSize()
    return (
        <div
            id="topNavbar"
            className="flex px-[20px] w-full items-center justify-between">
            <Link href={'/'} className="text-[24px] w-1/12 font-light">
                #0.03
            </Link>
            {isTablet && <Search className="max-w-7/12" />}
            {isDesktop && <NavLinks />}
            <div
                id="notificationProfile"
                className={`flex gap-5 items-center tablet:w-[15vw]`}>
                {isDesktop && <HeaderCart />}
                <Notifications />
                <HeaderProfilePicture />
            </div>
        </div>
    )
}

export default TopNavigation
