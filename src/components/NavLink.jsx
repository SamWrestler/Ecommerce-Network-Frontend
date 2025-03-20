import Link from 'next/link'
import React from 'react'

function NavLink({ text, href, active = false }) {
    return (
        <Link
            href={`${href}`}
            className={`py-4 px-8 hover:bg-gray-100 rounded-md ${active && 'rounded-none border-b-[1px] border-textSecondary font-bold'}`}>
            {text}
        </Link>
    )
}

export default NavLink
