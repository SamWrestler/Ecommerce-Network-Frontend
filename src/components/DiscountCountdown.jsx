'use client'
import React, { useEffect, useState } from 'react'

function DiscountCountdown({ initialSeconds, handleTimeIsOver }) {
    const [timeLeft, setTimeLeft] = useState(initialSeconds)

    useEffect(() => {
        if (timeLeft <= 0) handleTimeIsOver() // Stop if countdown reaches zero

        const interval = setInterval(() => {
            setTimeLeft(prev => prev - 1)
        }, 1000)

        return () => clearInterval(interval) // Cleanup when component unmounts
    }, [timeLeft])

    // Convert remaining time into days, hours, minutes, and seconds
    const formatTime = value => value.toString().padStart(2, '0').split('')

    const [day1, day2] = formatTime(Math.floor(timeLeft / (60 * 60 * 24)))
    const [hour1, hour2] = formatTime(
        Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60)),
    )
    const [minute1, minute2] = formatTime(
        Math.floor((timeLeft % (60 * 60)) / 60),
    )
    const [second1, second2] = formatTime(timeLeft % 60)
    return (
        <div dir="rtl" className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1">
                <div className="flex bg-bgPrimary w-[3.5rem] justify-center py-1 rounded-lg text-[25px] font-thin items-center gap-1">
                    <p className="font-thin w-5 text-center">{second2}</p>
                    <div className="h-6 border-l border-gray-300" />
                    <p className="font-thin w-5 text-center">{second1}</p>
                </div>
                <h2 className="font-light text-bgPrimary text-[20px]">ثانیه</h2>
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="flex bg-bgPrimary w-[3.5rem] justify-center py-1 rounded-lg text-[25px] font-thin items-center gap-1">
                    <p className="font-thin w-5 text-center">{minute2}</p>
                    <div className="h-6 border-l border-gray-300" />
                    <p className="font-thin w-5 text-center">{minute1}</p>
                </div>
                <h2 className="font-light text-bgPrimary text-[20px]">دقیقه</h2>
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="flex bg-bgPrimary w-[3.5rem] justify-center py-1 rounded-lg text-[25px] font-thin items-center gap-1">
                    <p className="font-thin w-5 text-center">{hour2}</p>
                    <div className="h-6 border-l border-gray-300" />
                    <p className="font-thin w-5 text-center">{hour1}</p>
                </div>
                <h2 className="font-light text-bgPrimary text-[20px]">ساعت</h2>
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="flex bg-bgPrimary w-[3.5rem] justify-center py-1 rounded-lg text-[25px] font-thin items-center gap-1">
                    <p className="font-thin w-5 text-center">{day2}</p>
                    <div className="h-6 border-l border-gray-300" />
                    <p className="font-thin w-5 text-center">{day1}</p>
                </div>
                <h2 className="font-light text-bgPrimary text-[20px]">روز</h2>
            </div>
        </div>
    )
}

export default DiscountCountdown
