import React from 'react'
import CategorySlider from './CategorySlider'
import SectionTitle from './SectionTitle'

function Category({className}) {
    return (
        <div className={`flex w-full flex-col mt-5 container gap-6 overflow-visible font-font ${className}`}>
            <SectionTitle text="خرید بر اساس دسته‌بندی" href="" />
            <CategorySlider />
        </div>
    )
}

export default Category
