'use client'
import React, { useState } from 'react'
import CollectionWrapper from './CollectionWrapper'
import DiscountCountdown from './DiscountCountdown'

function Discount() {
    const [timeIsOver, setTimeIsOver] = useState(false)

    const handleTimeIsOver = () => {
        setTimeIsOver(true)
    }

    return (
        <div className={`flex flex-col gap-6 ${timeIsOver && 'hidden'}`}>
            <h2 className="w-full font-font text-center font-black mt-20 text-[22px]">
                تو این فصل یه تخفیف خوب میچسبه
            </h2>
            <div className="flex flex-col gap-4 bg-textPrimary py-4">
                <div className="flex flex-row-reverse items-center container justify-between">
                    <h2
                        dir="rtl"
                        className="font-lalezar text-bgPrimary text-center text-[25px]">
                        همین
                        <br />
                        حالا
                        <br />
                        خرید کن!
                    </h2>
                    <DiscountCountdown
                        initialSeconds={20000}
                        handleTimeIsOver={handleTimeIsOver}
                    />
                </div>
                <CollectionWrapper
                    text="پرفروش‌ترین‌های این هفته 🔥"
                    discount={true}
                />
            </div>
        </div>
    )
}

export default Discount
