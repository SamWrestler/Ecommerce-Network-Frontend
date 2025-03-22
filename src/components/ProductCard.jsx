import React from 'react'
import ProductCardImage from './ProductCardImage'
import ProductOverview from './ProductOverview'
import ProductPrice from './ProductPrice'

function ProductCard({ discount }) {
    return (
        <article
            className={`flex flex-col p-2 h-[450px] w-[300px] ${discount && 'bg-bgPrimary rounded-md'}`}>
            <ProductCardImage />
            <div className="flex flex-col gap-2 mt-2">
                <ProductOverview />
                <h2 className="font-bold text-[18px]">تیشرت آبی مردانه</h2>
                <ProductPrice />
            </div>
        </article>
    )
}

export default ProductCard
