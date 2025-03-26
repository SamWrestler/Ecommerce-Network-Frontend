'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import Icons from './Icons'
import SizingTable from './SizingTable'
import useWindowSize from '@/hooks/useWindowSize'

function ProductSizes() {
    const [selectedSize, setSelectedSize] = useState(null)
    const { isDesktop } = useWindowSize()
    const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL']

    const handleSizeClick = size => {
        setSelectedSize(size)
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
                <h2 className="text-[18px] font-normal">سایز</h2>
                <SizingTable />
            </div>

            {isDesktop ? (
                <div className="w-full flex flex-wrap gap-12">
                    {sizes.map(size => (
                        <div
                            key={size} // ✅ Added key
                            className={`w-10 h-10 border border-textPrimary flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 ease-in-out
                            ${selectedSize === size ? 'bg-bgInput scale-110 text-textPrimary' : 'bg-border text-textPrimary'}`}
                            onClick={() => handleSizeClick(size)}>
                            {size}
                        </div>
                    ))}
                </div>
            ) : (
                <Swiper
                    className="!w-full !p-2"
                    slidesPerView={5.5}
                    freeMode={true}
                    modules={[FreeMode]}>
                    {sizes.map(size => (
                        <SwiperSlide key={size}>
                            <div
                                className={`w-10 h-10 border border-textPrimary flex items-center justify-center rounded-full cursor-pointer transition-all duration-200 ease-in-out
                                    ${selectedSize === size ? 'bg-bgInput scale-110 text-textPrimary' : 'bg-border text-textPrimary'}`}
                                onClick={() => handleSizeClick(size)}>
                                {size}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    )
}

export default ProductSizes
