import React from 'react'
import Icons from './Icons'

function BottomNavbar() {
    return (
        <nav className="flex absolute w-full bottom-0 font-light shadow-custom items-center  font-font flex-row-reverse">
            <div className="flex flex-col w-1/4 py-3 navbarActive items-center justify-center gap-1">
                <Icons name="home" className="text-[27px]" />
                <h2>خانه</h2>
            </div>
            <div className="flex flex-col w-1/4 py-3 items-center justify-center gap-1">
                <Icons name="shoppingBags" className="text-[27px]" />
                <h2>فروشگاه</h2>
            </div>
            <div className="flex flex-col w-1/4 py-3 items-center justify-center gap-1">
                <Icons name="shoppingBag" className="text-[27px]" />
                <h2>سبد خرید</h2>
            </div>
            <div className="flex flex-col w-1/4 py-3 items-center justify-center gap-1">
                <Icons name="user" className="text-[27px] fa-thin" />
                <h2>پروفایل</h2>
            </div>
        </nav>
    )
}

export default BottomNavbar
