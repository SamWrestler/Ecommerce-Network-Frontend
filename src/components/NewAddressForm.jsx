'use client'

import { useEffect, useState } from 'react'
import FormLabel from '@/components/FormLabel'
import Link from 'next/link'
import Image from 'next/image'
import PrimaryButton from '@/components/PrimaryButton'
import Icons from '@/components/Icons'

export default function NewAddressForm({ className }) {
    const [addressName, setAddressName] = useState(null)
    const [coordinates, setCoordinates] = useState({})
    const [mapImage, setMapImage] = useState('')

    useEffect(() => {
        const result = sessionStorage.getItem('coordinates')
        if (result) {
            try {
                const parsedCoordinates = JSON.parse(result)
                setCoordinates(parsedCoordinates)
            } catch (error) {
                console.error('Error parsing coordinates:', error)
            }
        }
    }, [])

    useEffect(() => {
        if (coordinates.longitude && coordinates.latitude) {
            const apiUrl = `https://api.neshan.org/v4/static?key=service.65ac486123b24518b49e0d3199635ed5&type=standard-night&zoom=15&width=800&height=500&center=${coordinates.latitude},${coordinates.longitude}&markerToken=391842.IC5KzqMh`

            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('API call failed')
                    }
                    return response.blob()
                })
                .then(blob => {
                    const imageUrl = URL.createObjectURL(blob)
                    setMapImage(imageUrl)
                })
                .catch(error => {
                    console.error('Error fetching map image:', error)
                })
        }
    }, [coordinates])

    return (
        <>
            <form
                action="#"
                className={`w-full flex flex-col font-font gap-4 ${className} pb-4`}>
                <Field
                    text="یک نام برای آدرس خود انتخاب کنید"
                    placeholder="مثلا خانه"
                    onChange={setAddressName}
                />
                <div className="flex flex-col gap-2">
                    <FormLabel text="موقعیت مکانی" />
                    <div
                        className={`flex flex-col items-center rounded-2xl bg-gray-50`}>
                        <Link
                            onClick={() => {
                                sessionStorage.setItem('setCoordinates', true)
                            }}
                            href={
                                '/profile/my-information/new-address/location'
                            }
                            className="flex w-full h-[30vh] bg-gray-200 rounded-2xl relative">
                            {mapImage ? (
                                <Image
                                    src={mapImage}
                                    alt={'Location'}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-2xl w-full"
                                />
                            ) : (
                                <div className="flex flex-col gap-2 justify-center text-textSecondary items-center w-full">
                                    <Icons
                                        name="location"
                                        className="text-[25px]"
                                    />
                                    <h2>انتخاب موقعیت مکانی بر روی نقشه</h2>
                                </div>
                            )}
                        </Link>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-2">
                    <FormLabel text="آدرس خود را وارد کنید" />
                    <textarea
                        className="w-full py-4 rounded-sm resize-none focus:ring-0 focus:border focus:border-textPrimary"
                        dir="rtl"
                        placeholder="ستارخان ، خیابان ...."
                        rows={2}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Field
                        text="پلاک"
                        placeholder="5"
                        onChange={setAddressName}
                    />
                    <Field
                        text="واحد"
                        placeholder="7"
                        onChange={setAddressName}
                    />
                </div>

                <Field
                    text="کدپستی"
                    placeholder="1647213123"
                    onChange={setAddressName}
                />

                <PrimaryButton text="افزودن آدرس جدید" />
            </form>
        </>
    )
}

function Field({ text, type = 'text', onChange, placeholder }) {
    return (
        <div className="flex w-full flex-col gap-2">
            <FormLabel text={text} />
            <input
                type={type}
                className="w-full py-4  rounded-sm focus:ring-0 focuse:border focus:border-textPrimary"
                onChange={e => onChange(e.target.value)}
                dir="rtl"
                placeholder={placeholder}
            />
        </div>
    )
}
