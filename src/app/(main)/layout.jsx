// import BottomNavbar from '@/components/BottomNavbar'
import React from 'react'
import BottomNavbar from '@/components/BottomNavbar'
function MainLayout({ children }) {
    return (
        <>
            {children}
            <BottomNavbar />
        </>
    )
}

export default MainLayout
