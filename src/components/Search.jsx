'use client'
import Icons from './Icons'
import { Drawer } from 'vaul'
import SearchHistory from './SearchHistory'
import { useState, useRef } from 'react'
import useWindowSize from '@/hooks/useWindowSize'
import useClickOutside from '@/hooks/useClickOutside'

export const Search = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { width, isTablet, isDesktop } = useWindowSize()
    const [isSearch, setIsSearch] = useState(false)
    const searchContainerRef = useRef(null)
    useClickOutside(searchContainerRef, () => {
        setIsSearch(false)
    })

    const searchHandler = () => {
        setIsSearch(true)
    }

    const history = [
        {
            id: '1',
            text: 'تاریخچه 1',
        },
        {
            id: '2',
            text: 'تاریخچه 2',
        },
        {
            id: '3',
            text: 'تاریخچه 2',
        },
        {
            id: '4',
            text: 'تاریخچه 2',
        },
        {
            id: '5',
            text: 'تاریخچه 2',
        },
        {
            id: '6',
            text: 'تاریخچه 2',
        },
        {
            id: '7',
            text: 'تاریخچه 2',
        },
        {
            id: '8',
            text: 'تاریخچه 2',
        },
        {
            id: '9',
            text: 'تاریخچه 2',
        },
        {
            id: '10',
            text: 'تاریخچه 2',
        },
        {
            id: '11',
            text: 'تاریخچه 2',
        },
    ]

    if (isDesktop) {
        return (
            <div
                id="search"
                ref={searchContainerRef}
                onClick={searchHandler}
                className={`w-[55%] bg-bgPrimary gap-4 px-3 py-4 absolute top-0 left-1/2 translate-x-[-50%] flex flex-col items-center ${isSearch && 'shadow-[0px_3px_8px_3px_rgba(0,_0,_0,_0.1)] rounded-xl'}`}>
                <form action="" className="flex w-full">
                    <div
                        className="flex w-full items-center relative text-textSecondary"
                        dir="rtl">
                        <input
                            type="text"
                            className="w-full cursor-pointer text-textSecondary rounded-lg py-4 pr-12 font-light border-[1px] border-textSecondary focus:placeholder:text-bgPrimary focus:outline-none focus:border-textPrimary focus:ring-0"
                            placeholder="به دنبال محصول خاصی می‌گردید؟"
                        />
                        {isSearch ? (
                            <Icons
                                name="arrowRight"
                                className="absolute z-50 cursor-pointer right-4 text-[24px] text-textSecondary"
                                onClick={e => {
                                    e.stopPropagation()
                                    setIsSearch(false)
                                }}
                            />
                        ) : (
                            <Icons
                                name="search"
                                className="absolute z-10 right-4 text-[24px] rotate-90 text-textSecondary"
                            />
                        )}
                    </div>
                </form>
                <SearchHistory
                    histories={history}
                    className={isSearch ? 'flex flex-col' : 'hidden'}
                />
            </div>
        )
    }

    return (
        <>
            <Drawer.Root
                dismissible={false}
                open={isOpen}
                onOpenChange={setIsOpen}>
                <Drawer.Trigger className="w-full">
                    <div
                        id="search"
                        className={`container ${className} flex justify-center`}>
                        <div className="flex items-center text-textSecondary py-4 justify-end px-4 gap-2 font-light border-[1px] border-textSecondary rounded-lg w-full">
                            <p>به دنبال محصول خاصی می‌گردید؟</p>
                            <Icons
                                name="search"
                                className="text-[24px] rotate-90"
                            />
                        </div>
                    </div>
                </Drawer.Trigger>
                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                    <Drawer.Title className="hidden"></Drawer.Title>
                    <Drawer.Content className="bg-bgPrimary h-[90vh] flex flex-col fixed bottom-0 left-0 right-0 max-h-[100vh] rounded-t-[10px]">
                        <div className="w-full mx-auto overflow-auto container py-4 rounded-t-[10px]">
                            <Drawer.Handle />
                            <form action="" className="py-4">
                                <div
                                    className="flex w-full items-center relative text-textSecondary"
                                    dir="rtl">
                                    <input
                                        type="text"
                                        className="w-full text-textSecondary rounded-lg py-4 pr-12 font-light border-[1px] border-textSecondary focus:placeholder:text-bgPrimary focus:outline-none focus:border-textPrimary focus:ring-0"
                                        placeholder="جستجو کنید"
                                    />
                                    <Icons
                                        name="arrowRight"
                                        className="absolute z-10 right-4 text-[24px] text-textSecondary"
                                        onClick={() => setIsOpen(false)}
                                    />
                                </div>
                            </form>
                            <SearchHistory histories={history} />
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </>
    )
}
