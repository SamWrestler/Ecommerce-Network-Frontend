'use client'
import React from 'react'
import Icons from './Icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
export default function SearchHistory({ histories, className }) {
    console.log(className)
    if (!histories || histories.length === 0) {
        return null
    }

    return (
        <div
            id="searchHistory"
            className={`w-full flex flex-col gap-4 font-font ${className}`}>
            <div className="flex items-center justify-end gap-2">
                <h2>جستجوهای اخیر</h2>
                <Icons name="history" />
            </div>
            <Swiper
                freeMode={true}
                slidesPerView={3.5}
                dir="rtl"
                spaceBetween={10}
                className="w-full"
                modules={[FreeMode]}>
                {histories.map(history => (
                    <SwiperSlide key={history.id} className="">
                        <div className="flex py-1 border-[1px] rounded-full justify-center items-center">
                            <p>{history.text}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export function SearchHistoryItem({ history }) {
    return (
        <div className="flex py-1 px-3 border-[1px] rounded-full min-w-max ">
            <p>{history}</p>
        </div>
    )
}
