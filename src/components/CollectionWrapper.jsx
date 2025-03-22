import React from 'react'
import SectionTitle from './SectionTitle'
import ProductRow from './ProductRow'

function CollectionWrapper({ className, text, discount = false }) {
    return (
        <section
            className={`flex w-full flex-col gap-6 container ${className}`}>
            {!discount && (
                <SectionTitle text={text} href="" discount={discount} />
            )}
            <ProductRow discount={discount} />
        </section>
    )
}

export default CollectionWrapper
