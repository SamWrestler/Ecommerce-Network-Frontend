'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode, Pagination } from 'swiper/modules'
import useWindowSize from '@/hooks/useWindowSize'
import CategorySliderCart from './CategorySliderCart'
import men from '/public/images/men.png'
import women from '/public/images/women.png'
import children from '/public/images/children.png'
import teenagers from '/public/images/teenagers.png'

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
                modules={[FreeMode, Pagination]}>
                <SwiperSlide>
                    <CategorySliderCart image={men} text={'مردانه'} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategorySliderCart image={women} text={'زنانه'} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategorySliderCart image={children} text={'بچگانه'} />
                </SwiperSlide>
                <SwiperSlide>
                    <CategorySliderCart image={teenagers} text={'نوجوانان'} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
