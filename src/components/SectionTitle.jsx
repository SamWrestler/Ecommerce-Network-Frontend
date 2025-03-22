import React from 'react'
import Link from 'next/link'
function SectionTitle({ text, href }) {
    return (
        <div className="w-full flex flex-row-reverse justify-between items-center">
            <h2
                dir="rtl"
                className="text-[18px] tablet:text-[20px] font-semibold text-textPrimary">
                {text}
            </h2>
            <Link
                href={href}
                className="text-[16px] tablet:text-[18px] font-normal text-textSecondary">
                مشاهده همه
            </Link>
        </div>
    )
}

export default SectionTitle
