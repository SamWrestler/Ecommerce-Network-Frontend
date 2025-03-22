'use client'
import { Search } from './Search'
import TopNavigation from './TopNavigation'
import useWindowSize from '@/hooks/useWindowSize'

export default function Header({ className }) {
    //TODO Add Animations for everything.
    //TODO Change scroll right to left.
    //TODO Add poduct card to the search box.
    //TODO Add notification panel.
    //TODO Add profile panel.
    const { isDesktop, isTablet } = useWindowSize()

    return (
        <header
            className={`py-5 flex flex-col gap-4 shadow-custom items-center ${className}`}>
            <TopNavigation />
            {isDesktop && (
                <div className="flex w-full h-[6rem] items-center justify-center relative">
                    <Search />
                </div>
            )}
            {!isDesktop && !isTablet && <Search />}
        </header>
    )
}
