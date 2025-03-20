'use client'
import React from 'react'
import Icons from './Icons'
import Image from 'next/image'
import { Search } from './Search'
import defaultProfileImage from '/public/images/defaultProfile.png'
import NavLinks from './NavLinks'
import useWindowSize from '@/hooks/useWindowSize'
function TopNavigation() {
    const { width, isTablet, isDesktop } = useWindowSize()
    return (
        <div
            id="topNavbar"
            className="flex px-[20px] w-full items-center justify-between">
            <h2 className="text-[24px] w-1/12 font-light">#0.03</h2>
            {isTablet && <Search className="max-w-7/12 " />}
            {isDesktop && <NavLinks />}
            <div id="notificationProfile" className="flex gap-5 items-center">
                <Icons name="bell" className="text-[24px] relative px-2">
                    <div className="bg-warning w-4 h-4 rounded-full flex justify-center items-center absolute bottom-0 right-0">
                        <p className="text-[12px] text-textPrimary font-normal font-font">
                            3
                        </p>
                    </div>
                </Icons>
                <Image
                    alt="profile"
                    src={defaultProfileImage}
                    className="h-[30px] w-[30px] object-cover rounded-full  border-[0.6px] border-textPrimary"
                />
            </div>
        </div>
    )
}

export default TopNavigation
