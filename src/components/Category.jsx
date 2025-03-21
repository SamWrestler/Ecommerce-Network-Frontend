import Link from 'next/link'
import React from 'react'
import CategorySlider from './CategorySlider'

function Category() {
    return (
        <div className="flex w-full flex-col mt-5 container gap-6 overflow-visible font-font">
            <div className="w-full flex flex-row-reverse justify-between items-center">
                <h2 className="text-[18px] tablet:text-[20px] font-semibold text-textPrimary">
                    خرید بر اساس دسته‌بندی
                </h2>
                <Link
                    href=""
                    className="text-[16px] tablet:text-[18px] font-normal text-textSecondary">
                    مشاهده همه
                </Link>
            </div>
            <CategorySlider />
        </div>
    )
}

export default Category
