'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import Icons from './Icons'

function Filters() {
    return (
        <Swiper
            className="!w-full"
            slidesPerView={3.5}
            modules={[FreeMode]}
            freeMode={true}>
            <SwiperSlide>
                <div className="py-1 w-[6rem] text-[20px] border border-textSecondary rounded-md flex items-center justify-around">
                    <p>سایز</p>
                    <Icons name="chevronLeft" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-1 w-[6rem] text-[20px] border border-textSecondary rounded-md flex items-center justify-around">
                    <p>جنس</p>
                    <Icons name="chevronLeft" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-1 w-[6rem] text-[20px] border border-textSecondary rounded-md flex items-center justify-around">
                    <p>رنگ</p>
                    <Icons name="chevronLeft" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-1 w-[6rem] text-[20px] border border-textSecondary rounded-md flex items-center justify-around">
                    <p>قیمت</p>
                    <Icons name="chevronLeft" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="py-1 w-[6rem] text-[20px] border border-textSecondary rounded-md flex items-center justify-around">
                    <p>استایل</p>
                    <Icons name="chevronLeft" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Filters
