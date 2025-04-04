import Icons from '@/components/Icons'
import React, { useState } from 'react'
import CornerModal from '@/components/CornerModal'
import Cart from '@/components/Cart'

export default function HeaderCart() {
    const [openModal, setOpenModal] = useState(false)
    const [isClickDisabled, setIsClickDisabled] = useState(false)
    const handleClick = () => {
        if (isClickDisabled) return // Prevent clicks while disabled

        setOpenModal(prev => !prev)
        setIsClickDisabled(true) // Disable further clicks

        // Re-enable clicking after 2 seconds
        setTimeout(() => {
            setIsClickDisabled(false)
        }, 500)
    }

    return (
        <>
            <Icons
                name="shoppingBag"
                className="text-[24px] relative px-2 cursor-pointer"
                onClick={handleClick}>
                <div className="bg-success w-4 h-4 rounded-full flex justify-center items-center absolute bottom-0 right-0">
                    <p className="text-[12px] text-bgPrimary font-normal font-font">
                        3
                    </p>
                </div>
            </Icons>
            <CornerModal
                cart={true}
                openModal={openModal}
                setOpenModal={setOpenModal}>
                <Cart />
            </CornerModal>
        </>
    )
}
