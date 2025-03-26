'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Icons from './Icons'
import { useGSAP } from '@gsap/react'

function NavigateToTop({ scrolled }) {
    const [show, setShow] = useState(false)
    const buttonRef = useRef(null)

    useEffect(() => {
        const handleScrollEvent = () => {
            if (window.scrollY > 900) {
                setShow(true)
            } else {
                setShow(false)
            }
        }

        window.addEventListener("scroll", handleScrollEvent)

        return () => {
            window.removeEventListener("scroll", handleScrollEvent)
        }
    }, [])

    useGSAP(() => {
        if (buttonRef.current) {
            // Animate the opacity and position for the button based on the `show` state
            if (show) {
                gsap.to(buttonRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                    display: 'flex',
                })
            } else {
                gsap.to(buttonRef.current, {
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.4,
                    ease: 'power2.in',
                    onComplete: () => {
                        if (buttonRef.current) {
                            buttonRef.current.style.display = 'none'
                        }
                    }
                })
            }

            // Animate the bottom position based on the `scrolled` prop
            gsap.to(buttonRef.current, {
                bottom: scrolled ? '6rem' : '1rem', // Adjust bottom position based on scrolled
                duration: 0.25,
                ease: 'power2.out',
            })
        }
    }, [show, scrolled])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div
            ref={buttonRef}
            onClick={scrollToTop}
            role="button"
            dir='rtl'
            style={{
                display: 'none',
                opacity: 0,
                transform: 'translateY(50px)',
                cursor: 'pointer',
            }}
            className={`z-40 bg-textPrimary text-bgPrimary items-center font-font justify-around h-[3.5rem] w-[10rem] rounded-xl fixed  left-4`}
        >
            <h2>بریم بالا</h2>
            <Icons name="chevronUp" />
        </div>
    )
}

export default NavigateToTop
