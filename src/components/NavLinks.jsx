import React from 'react'
import NavLink from './NavLink'

function NavLinks() {
    return (
        <div className="flex flex-row-reverse items-center">
            <NavLink text="خانه" href="" active="true" />
            <NavLink text="مردانه" href="" />
            <NavLink text="زنانه" href="" />
            <NavLink text="بچگانه" href="" />
            <NavLink text="نوجوان" href="" />
        </div>
    )
}

export default NavLinks
