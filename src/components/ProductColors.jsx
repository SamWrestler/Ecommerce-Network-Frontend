'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import Icons from './Icons'
import useWindowSize from '@/hooks/useWindowSize'

function ProductColors() {
    // State to track the selected color
    const [selectedColor, setSelectedColor] = useState(null)
    const { isDesktop } = useWindowSize()
    // List of colors (can be fetched from the database in the future)
    const colors = [
        { name: 'red', hex: '#f87171' },
        { name: 'green', hex: '#34d399' },
        { name: 'yellow', hex: '#facc15' },
        { name: 'pink', hex: '#ec4899' },
        { name: 'purple', hex: '#8b5cf6' },
        { name: 'cyan', hex: '#06b6d4' },
        { name: 'gray', hex: '#6b7280' },
        { name: 'white', hex: '#ffffff' },
    ]

    // Handle color selection
    const handleColorClick = color => {
        setSelectedColor(color)
    }

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-[18px] font-normal">رنگ</h2>
            {isDesktop ? (
                <div className="w-full flex flex-wrap gap-12">
                    {colors.map(color => (
                        <div
                            key={color.name}
                            className={`w-10 h-10 border hover:scale-105 border-textPrimary flex items-center justify-center rounded-full cursor-pointer relative transition-all duration-200 ease-in-out transform
                    ${selectedColor?.name === color.name ? 'border-2 scale-110 border-border' : ''}`}
                            onClick={() => handleColorClick(color)}
                            style={{ backgroundColor: color.hex }} // Use inline styles for dynamic colors
                        >
                            {selectedColor?.name === color.name && (
                                <Icons
                                    name="check"
                                    className="text-[18px] text-bgPrimary"
                                />
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <Swiper
                    className="!w-full !p-2"
                    slidesPerView={5.5}
                    freeMode={true}
                    modules={[FreeMode]}>
                    {colors.map(color => (
                        <SwiperSlide key={color.name}>
                            <div
                                className={`w-10 h-10 border  border-textPrimary flex items-center justify-center rounded-full cursor-pointer relative transition-all duration-200 ease-in-out transform
                            ${selectedColor?.name === color.name ? 'border-2 scale-110 border-border' : ''}`}
                                onClick={() => handleColorClick(color)}
                                style={{ backgroundColor: color.hex }} // Use inline styles for dynamic colors
                            >
                                {selectedColor?.name === color.name && (
                                    <Icons
                                        name="check"
                                        className="text-[18px] text-bgPrimary"
                                    />
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    )
}

export default ProductColors
