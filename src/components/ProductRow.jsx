'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import ProductCard from './ProductCard'

function ProductRow({ discount }) {
    return (
        <Swiper
            breakpoints={{
                // Define different behavior based on viewport width
                320: {
                    slidesPerView: 1.1, // Show 1 slide per view on small screens (e.g., mobile)
                },
                390: {
                    slidesPerView: 1.2, // Show 1.5 slides per view (e.g., large mobile or small tablet)
                },
                600: {
                    slidesPerView: 2, // Show 2 slides per view (e.g., mobile landscape or small tablet)
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2.5, // Show 2.5 slides per view (e.g., medium tablet)
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 2.7, // Show 3 slides per view (e.g., large tablet or small desktop)
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 3.6, // Show 4 slides per view (e.g., desktop)
                    spaceBetween: 30,
                },
                1440: {
                    slidesPerView: 4.2, // Show 5 slides per view (e.g., large desktop)
                    spaceBetween: 40,
                },
                1920: {
                    slidesPerView: 6, // Show 6 slides per view (e.g., very large desktop)
                    spaceBetween: 50,
                },
            }}
            freeMode={true}
            dir="rtl"
            className="w-full"
            modules={[FreeMode]}>
            <SwiperSlide>
                <ProductCard discount={discount} />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard discount={discount} />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard discount={discount} />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard discount={discount} />
            </SwiperSlide>
            <SwiperSlide>
                <ProductCard discount={discount} />
            </SwiperSlide>
        </Swiper>
    )
}

export default ProductRow
