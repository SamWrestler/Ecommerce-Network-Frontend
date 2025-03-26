import React from 'react'
import CategorySlider from './CategorySlider'
import SectionTitle from './SectionTitle'

function Category({className, products}) {
    return (
        <div className={`flex w-full flex-col mt-5  gap-6 overflow-visible font-font ${className} ${!products && "!container"}`}>
            <SectionTitle products={products} text={products ? "نوع لباس" : "خرید بر اساس دسته‌بندی"} href="" />
            <CategorySlider />
        </div>
    )
}

export default Category
