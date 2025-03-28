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
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'
        },
    }

    return (
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
            className={`w-full h-[275px] sm:h-[350px] md:h-[456px] lg:h-[663px] lg:shadow-custom lg:w-[85%] lg:mt-10
            lg:mb-10 lg:rounded-lg ${className}`}>
            <SwiperSlide>
                <Image
                    src={Slider_1}
                    alt="Slider's Image"
                    className="object-cover w-full h-full"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={Slider_2}
                    alt="Slider's Image"
                    className="object-cover w-full h-full"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={Slider_3}
                    alt="Slider's Image"
                    className="object-cover w-full h-full"
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default HeroSlider
