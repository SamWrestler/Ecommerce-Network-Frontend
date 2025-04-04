import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function CategorySliderCart({ image, text }) {
    return (
        <Link
            href={'/products'}
            className="w-full flex flex-col items-center gap-2 justify-center cursor-pointer">
            <div className="w-[80px] tablet:w-[100px] aspect-square overflow-hidden rounded-full bg-bgInput relative">
                <Image
                    src={image}
                    alt="Category Image"
                    fill
                    className="object-cover"
                />
            </div>
            <h2 className="font-medium text-center">{text}</h2>
        </Link>
    )
}

export default CategorySliderCart
