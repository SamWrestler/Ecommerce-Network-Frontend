'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const BottomSheet = ({ isOpen = false, onClose, children }) => {
    const slideRef = useRef(null)

    useGSAP(() => {
        if (slideRef.current) {
            gsap.to(slideRef.current, {
                y: isOpen ? '0%' : '100%', // Slide in/out
                duration: 0.4,
                ease: 'linear', // Keep it simple
            })
        }
    }, [isOpen])

    return (
        <div
            ref={slideRef}
            className="fixed container bottom-[-100%] left-0 w-screen h-auto bg-white z-50 flex flex-col shadow-lg">
            {children}

            {/* Close Button */}
            <button
                className="absolute top-4 right-4 text-2xl"
                onClick={onClose}>
                ✖
            </button>
        </div>
    )
}

export default BottomSheet
