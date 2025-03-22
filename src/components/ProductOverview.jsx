import React from 'react'
import Icons from './Icons'

function ProductOverview() {
    return (
        <div className="flex items-center gap-2">
            <div className="flex gap-1">
                <Icons name="star" className="text-warning text-[16px]" />
                <p className="font-medium text-[16px]">4.3</p>
            </div>
            <p className="text-border text-[14px]">(1234)</p>
        </div>
    )
}

export default ProductOverview
