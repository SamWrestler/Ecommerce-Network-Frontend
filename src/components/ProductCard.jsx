import React from 'react'
import ProductCardImage from './ProductCardImage'
import ProductOverview from './ProductOverview'
import ProductPrice from './ProductPrice'
import Link from 'next/link'

function ProductCard({ discount, className, href = '' }) {
    return (
        <Link
            dir="rtl"
            href={href}
            className={`flex flex-col p-2 h-[450px] w-[300px] ${discount && 'bg-bgPrimary rounded-md'} ${className}`}>
            <ProductCardImage />
            <div className="flex flex-col gap-2 mt-2">
                <ProductOverview />
                <h2 className="font-bold text-[18px]">تیشرت آبی مردانه</h2>
                <ProductPrice />
            </div>
        </Link>
    )
}

export default ProductCard
