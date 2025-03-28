'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import Image from 'next/image'
import tshirt from '/public/images/Blue.png'
import useWindowSize from '@/hooks/useWindowSize'
import 'swiper/css'
import 'swiper/css/navigation'

export default function OrderSlider() {
    const { isTablet } = useWindowSize()
    return (
        <Swiper
            className={'!w-full !mt-3'}
            modules={[FreeMode]}
            slidesPerView={isTablet ? 3.6 : 2.5}
            freeMode={true}>
            <SwiperSlide>
                <Image
                    src={tshirt}
                    alt={'This is blue tshirt'}
                    width={100}
                    height={100}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={tshirt}
                    alt={'This is blue tshirt'}
                    width={100}
                    height={100}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={tshirt}
                    alt={'This is blue tshirt'}
                    width={100}
                    height={100}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={tshirt}
                    alt={'This is blue tshirt'}
                    width={100}
                    height={100}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={tshirt}
                    alt={'This is blue tshirt'}
                    width={100}
                    height={100}
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src={tshirt}
                    alt={'This is blue tshirt'}
                    width={100}
                    height={100}
                />
            </SwiperSlide>
        </Swiper>
    )
}
