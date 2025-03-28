import React from 'react'
import '../../public/fontawesome/css/all.css'
import icons from '../../public/constants/icons.json'

function Icons({ name, className, children = null, onClick }) {
    return (
        <>
            <i className={`${icons[name]} ${className}`} onClick={onClick}>
                {children}
            </i>
        </>
    )
}

export default Icons
