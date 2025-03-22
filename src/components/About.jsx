import React from 'react'
import Icons from './Icons'

function About({ className }) {
    return (
        <div
            className={`grid grid-cols-2 w-full gap-x-6 gap-y-6 tablet:grid-cols-2 desktop:grid-cols-4 mt-6 ${className}`}>
            <div className="flex items-center justify-center flex-col text-center text-[22px] tablet:text-[25px] text-textSecondary gap-4 tablet:gap-3 font-[300]">
                <Icons name="truckFast" className="text-[60px]" />
                <h2>تحویل سریع با پست پیشتاز</h2>
            </div>
            <div className="flex items-center justify-center flex-col text-center text-[22px] tablet:text-[25px] text-textSecondary gap-3 font-[300]">
                <Icons name="badgeCheck" className="text-[60px]" />
                <h2>ضمانت کیفیت و اصالت</h2>
            </div>
            <div className="flex items-center justify-center flex-col text-center text-[22px] tablet:text-[25px] text-textSecondary gap-3 font-[300]">
                <Icons name="headset" className="text-[60px]" />
                <h2>پشتیبانی و پیگیری</h2>
            </div>
            <div className="flex items-center justify-center flex-col text-center text-[22px] tablet:text-[25px] text-textSecondary gap-3 font-[300]">
                <Icons name="moneyTrendUp" className="text-[60px]" />
                <h2>قیمت مناسب کیفیت بالا</h2>
            </div>
        </div>
    )
}

export default About
