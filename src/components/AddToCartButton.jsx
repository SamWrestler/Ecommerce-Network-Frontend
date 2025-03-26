'use client'
import { useState } from 'react'
import Icons from './Icons'
function AddToCartButton({ className }) {
    const [addToCard, setAddToCart] = useState(false)

    const [quantity, setQuantity] = useState(0)

    const addToCartClickHandler = () => {
        setAddToCart(true)
        setQuantity(quantity + 1)
    }

    const addOneClickHandler = e => {
        e.stopPropagation()
        setQuantity(quantity + 1)
    }
    const removeOneClickHandler = e => {
        e.stopPropagation()
        if (quantity == 1) {
            setAddToCart(false)
            return setQuantity(0)
        }
        return setQuantity(quantity - 1)
    }

    return (
        <button
            dir="rtl"
            onClick={!addToCard ? addToCartClickHandler : null}
            className={`py-6 w-[13.5rem] rounded-xl flex border border-textPrimary items-center justify-center gap-2 ${addToCard && 'bg-textPrimary'} ${className}`}>
            {addToCard ? (
                <>
                    <div className="flex w-full flex-row-reverse items-center justify-around px-3 transition-all duration-25">
                        <Icons
                            className="text-bgPrimary text-[20px] desktop:text-[25px] desktop:hover:scale-110 transition-all"
                            name="plus"
                            onClick={addOneClickHandler}
                        />
                        <p dir="rtl" className="text-bgPrimary">
                            {quantity} عدد در سبد خرید
                        </p>
                        <Icons
                            className="text-bgPrimary text-[20px] desktop:text-[25px] desktop:hover:scale-110 transition-all duration-25"
                            name="minus"
                            onClick={removeOneClickHandler}
                        />
                    </div>
                </>
            ) : (
                <>
                    <p>افزودن به سبد خرید</p>
                    <Icons name="shoppingBag" className="text-[25px]" />
                </>
            )}
        </button>
    )
}

export default AddToCartButton
