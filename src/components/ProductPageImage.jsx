'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Zoom } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'

function ProductPageImage({ images }) {
    return (
        <div className="flex h-[60vh] bg-bgPrimary border-b desktop:! border-none mt-[4.5rem]">
            <Swiper
                zoom={true}
                loop={true}
                pagination={{
                    clickable: false,
                    dynamicBullets: true,
                }}
                modules={[Pagination, Zoom]}
                className="!w-full desktop:!w-[30vw]">
                {images.map(image => {
                    return (
                        <SwiperSlide key={image}>
                            <div className="flex w-full h-full items-center justify-center">
                                <Image
                                    src={image}
                                    alt="this is Image"
                                    width={300}
                                    height={300}
                                    quality={100}
                                />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default ProductPageImage
