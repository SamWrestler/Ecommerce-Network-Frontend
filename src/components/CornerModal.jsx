'use client'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import useClickOutside from '@/hooks/useClickOutside'
import Icons from '@/components/Icons'

export default function CornerModal({
    children,
    openModal,
    setOpenModal,
    overFlow = true,
}) {
    const [displayModal, setDisplayModal] = useState('hidden')
    const modal = useRef(null)

    const closeModal = () => {
        setOpenModal(false)
    }

    useClickOutside(modal, () => {
        setOpenModal(false)
    })

    useGSAP(() => {
        if (openModal) {
            gsap.to(modal.current, {
                duration: 0.25,
                opacity: 1,
                ease: 'power2.out',
                onComplet: () => {
                    setDisplayModal('flex flex-col')
                },
            })
        } else {
            gsap.to(modal.current, {
                duration: 0.25,
                opacity: 0,
                ease: 'power2.in',
                onComplete: () => {
                    setDisplayModal('hidden')
                },
            })
        }
    }, [openModal])

    return (
        <div
            ref={modal}
            className={`${displayModal} absolute ${overFlow && 'overflow-scroll'} overflow-x-hidden z-[100] top-20 right-6 w-[25vw] h-fit max-h-[70vh] py-4 px-6 rounded-xl shadow-custom bg-bgPrimary`}>
            <div className="w-full">
                <Icons
                    name={'close'}
                    className="text-[22px] cursor-pointer"
                    onClick={() => {
                        setOpenModal(false)
                    }}
                />
            </div>
            {React.cloneElement(children, { closeModal })}
        </div>
    )
}
