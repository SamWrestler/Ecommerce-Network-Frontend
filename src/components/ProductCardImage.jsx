'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import Image from 'next/image'
import tshirt from '/public/images/Blue.png'

function ProductCardImage() {
    return (
        <Swiper
            slidesPerView={1}
            freeMode={true}
            loop={true}
            dir="rtl"
            className="w-full rounded-md h-[85%] bg-bgInput"
            pagination={{
                clickable: false,
                dynamicBullets: true,
            }}
            modules={[Pagination]}>
            <SwiperSlide>
                <div className="flex justify-center items-center">
                    <Image
                        src={tshirt}
                        className="w-[80%] "
                        alt="Blue Tshirt"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex justify-center items-center">
                    <Image
                        src={tshirt}
                        className="w-[80%] "
                        alt="Blue Tshirt"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex justify-center items-center">
                    <Image
                        src={tshirt}
                        className="w-[80%] "
                        alt="Blue Tshirt"
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="flex justify-center items-center">
                    <Image
                        src={tshirt}
                        className="w-[80%] "
                        alt="Blue Tshirt"
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default ProductCardImage
