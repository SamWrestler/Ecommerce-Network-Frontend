'use client'
import useWindowSize from '@/hooks/useWindowSize'

export default function ProfileLayout({ children, profile }) {
    const { isDesktop } = useWindowSize()
    if (!isDesktop) {
        return <>{children}</>
    }
    return <>{profile}</>
}
