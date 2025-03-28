'use client'
import { useEffect, useState } from 'react'
import useWindowSize from '@/hooks/useWindowSize'
import AddToCartButton from './AddToCartButton'

function AddToCart() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const { isDesktop } = useWindowSize()
    useEffect(() => {
        if (isDesktop) return
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    return (
        <div
            className={`flex items-center py-3 px-4 shadow-custom fixed desktop:static z-40 bg-bgInput w-full justify-between font-font flex-row-reverse bottom-0 transition-transform duration-300
                ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
            <div className="flex flex-col items-end gap-2">
                <h2 className="text-[18px]">قیمت محصول</h2>
                <p dir="rtl" className="text-[18px] font-medium text-error">
                    452,000 ءتءء
                </p>
            </div>
            <AddToCartButton />
        </div>
    )
}

export default AddToCart
