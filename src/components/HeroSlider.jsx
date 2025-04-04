'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import Image from 'next/image'
import Slider_1 from '/public/images/Slider_1.jpg'
import Slider_2 from '/public/images/Slider_2.jpg'
import Slider_3 from '/public/images/Slider_3.jpg'

function HeroSlider({ className }) {
    const pagination = {
        clickable: false,
        dynamicBullets: true,
    }

    return (
        <div
            className={`w-full desktop:w-[80vw] desktop:mt-8 aspect-video relative overflow-hidden desktop:rounded-2xl shadow-custom ${className}`}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                pagination={pagination}
                className="w-full h-full">
                {[Slider_1, Slider_2, Slider_3].map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={image}
                            alt={`Slider image ${index + 1}`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSlider
