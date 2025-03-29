'use client'
import React from 'react'
import Icons from './Icons'
import { Search } from './Search'
import NavLinks from './NavLinks'
import useWindowSize from '@/hooks/useWindowSize'
import HeaderProfilePicture from '@/components/HeaderProfilePicture'

function TopNavigation() {
    const { isTablet, isDesktop } = useWindowSize()
    return (
        <div
            id="topNavbar"
            className="flex px-[20px] w-full items-center justify-between">
            <h2 className="text-[24px] w-1/12 font-light">#0.03</h2>
            {isTablet && <Search className="max-w-7/12 " />}
            {isDesktop && <NavLinks />}
            <div id="notificationProfile" className="flex gap-5 items-center">
                <Icons name="shoppingBag" className="text-[24px] relative px-2">
                    <div className="bg-success w-4 h-4 rounded-full flex justify-center items-center absolute bottom-0 right-0">
                        <p className="text-[12px] text-bgPrimary font-normal font-font">
                            3
                        </p>
                    </div>
                </Icons>
                <Icons name="bell" className="text-[24px] relative px-2">
                    <div className="bg-warning w-4 h-4 rounded-full flex justify-center items-center absolute bottom-0 right-0">
                        <p className="text-[12px] text-textPrimary font-normal font-font">
                            3
                        </p>
                    </div>
                </Icons>
                <HeaderProfilePicture />
            </div>
        </div>
    )
}

export default TopNavigation
