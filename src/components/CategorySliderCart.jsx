import React from 'react'
import Image from 'next/image'
import CategoryImage from '/public/images/Category.png'

function CategorySliderCart() {
    return (
        <div className="w-full flex flex-col items-center gap-2 justify-center">
            <div className="h-[80px] tablet:h-[100px] tablet:w-[100px] overflow-hidden w-[80px] rounded-full bg-bgInput relative">
                <Image
                    src={CategoryImage}
                    alt="Category Image"
                    className="w-full h-full absolute bottom-[-10px] "
                />
            </div>
            <h2 className="font-medium">زنانه</h2>
        </div>
    )
}

export default CategorySliderCart
