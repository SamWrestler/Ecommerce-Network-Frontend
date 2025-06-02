'use client'
import { useEffect, useRef, useState } from 'react'
import LocationPicker from '@/components/LocationPicker'
import PrimaryButton from '@/components/PrimaryButton'
import Icons from '@/components/Icons'
import { useRouter } from 'next/navigation'

export default function Location() {
    const mapContainerRef = useRef(null)
    const [coordinates, setCoordinates] = useState(null)
    const router = useRouter()

    useEffect(() => {
        // Check if the setCoordinates flag exists in sessionStorage
        const sessionValidation = sessionStorage.getItem('setCoordinates')
        if (sessionValidation === 'false' || sessionValidation === null)
            router.push('/profile/my-information/new-address') // Redirect if coordinates are not set
    }, [router])

    return (
        <div className="flex w-full h-full font-font">
            <div className="w-screen h-screen relative" ref={mapContainerRef}>
                <LocationPicker
                    mapContainerRef={mapContainerRef}
                    setCoordinates={setCoordinates}
                />
            </div>
            <PrimaryButton
                text="ثبت موقعیت"
                className="absolute w-10/12 bottom-4 left-1/2 -translate-x-1/2 z-[150]"
                onClick={() => {
                    // Store the coordinates as a string in sessionStorage
                    sessionStorage.setItem(
                        'coordinates',
                        JSON.stringify(coordinates),
                    )
                    // Remove the setCoordinates flag after saving
                    sessionStorage.removeItem('setCoordinates')
                    // Navigate back to the previous page
                    return router.back()
                }}
            />
            <div
                className="flex justify-center items-center w-12 h-12 bg-textPrimary rounded-full shadow-custom absolute top-4 left-4"
                onClick={() => router.back()}>
                <Icons name="close" className="text-bgPrimary text-[25px]" />
            </div>
        </div>
    )
}
