'use client'
import Image from 'next/image'
import tshirt from '/public/images/Blue.png'
import Icons from './Icons'
import { useState } from 'react'
import useWindowSize from '@/hooks/useWindowSize'
import { usePathname } from 'next/navigation'

function CartProductCard() {
    const [quantity, setQuantity] = useState(6)
    const [trash, setTrash] = useState(false)
    const { isDesktop } = useWindowSize()
    const pathName = usePathname()
    const addQuantityHandler = () => {
        setQuantity(quantity + 1)
        if (trash) setTrash(false)
    }
    const minusQuantityHandler = () => {
        if (quantity == 1) return alert('اخریشه')
        if (quantity - 1 === 1) setTrash(true)
        setQuantity(quantity - 1)
    }

    return (
        <div
            className={`flex items-center w-full  justify-between ${pathName === '/cart' && 'p-3 !pr-0'} gap-2 `}>
            <div className={`flex gap-3 items-center `}>
                <div
                    className={`w-[10rem] h-[10rem] ${pathName !== '/cart' ? 'desktop:w-[11rem] desktop:h-[11rem]' : 'desktop:h-[14rem] desktop:w-[14rem]'}  rounded-md bg-bgInput flex justify-center items-center`}>
                    <Image
                        src={tshirt}
                        alt="this is tshirt"
                        width={
                            !isDesktop ? 100 : pathName === '/cart' ? 180 : 135
                        }
                        height={
                            !isDesktop ? 100 : pathName === '/cart' ? 180 : 135
                        }
                    />
                </div>
                <div className="flex flex-col items-start justify-start gap-4">
                    <h2
                        className={`text-[20px] font-medium ${pathName !== '/cart' && '!text-[18px]'}`}>
                        تی‌شرت آبی مردانه
                    </h2>
                    <p>482,000 ءتءء</p>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                            <p className="text-blue-500">آبی</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="w-5 h-5 bg-bgInput border border-textPrimary flex justify-center items-center font-light text-[14px] rounded-full">
                                M
                            </div>
                            <p className="">مدیوم</p>
                        </div>
                    </div>
                    <div className="flex w-[8rem]  items-center justify-between">
                        <div
                            className={`flex cursor-pointer hover:scale-95 transition-all justify-center items-center w-10 h-10 rounded-full border border-textSecondary ${pathName !== '/cart' && '!w-8 !h-8'}`}
                            onClick={addQuantityHandler}>
                            <Icons name="plus" />
                        </div>
                        <h2 className="font-light text-[20px]">{quantity}</h2>
                        <div
                            className={`flex cursor-pointer hover:scale-95 transition-all justify-center items-center w-10 h-10 rounded-full border border-textSecondary ${pathName !== '/cart' && '!w-8 !h-8'}`}>
                            {trash ? (
                                <Icons
                                    name="trash"
                                    onClick={minusQuantityHandler}
                                    className="text-error"
                                />
                            ) : (
                                <Icons
                                    name="minus"
                                    onClick={minusQuantityHandler}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProductCard
