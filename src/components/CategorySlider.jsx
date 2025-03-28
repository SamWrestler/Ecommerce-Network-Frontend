'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'
import useWindowSize from '@/hooks/useWindowSize'
import CategorySliderCart from './CategorySliderCart'

export default function CategorySlider() {
    const { isDesktop } = useWindowSize()
    //TODO Change the design of the category slider for better sizing in different devices.
    return (
        <>
            <Swiper
                slidesPerView={isDesktop ? 4 : 3.5}
                spaceBetween={32}
                freeMode={true}
                dir="rtl"
                className="w-full"
                // pagination={{
                //     clickable: true,
                // }}
                modules={[FreeMode, Pagination]}>
                <SwiperSlide>
                    <CategorySliderCart />
                </SwiperSlide>
                <SwiperSlide>
                    <CategorySliderCart />
                </SwiperSlide>
                <SwiperSlide>
                    <CategorySliderCart />
                </SwiperSlide>
                <SwiperSlide>
                    <CategorySliderCart />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
