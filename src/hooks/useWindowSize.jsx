import { useState, useEffect } from 'react'

const useWindowSize = () => {
    const [width, setWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 0,
    )
    const [isTablet, setIsTablet] = useState(false)
    const [isDesktop, setIsDesktop] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        handleResize() // Call it once initially to set the correct state

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (width > 768 && width < 1024) {
            setIsTablet(true)
            setIsDesktop(false)
        } else if (width > 1024) {
            setIsTablet(false)
            setIsDesktop(true)
        } else {
            setIsTablet(false)
            setIsDesktop(false)
        }
    }, [width])

    return { width, isTablet, isDesktop }
}

export default useWindowSize
