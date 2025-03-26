'use client'
import Icons from './Icons'
import { Drawer } from 'vaul'
import SearchHistory from './SearchHistory'
import { useState, useRef, useEffect } from 'react'
import useWindowSize from '@/hooks/useWindowSize'
import useClickOutside from '@/hooks/useClickOutside'
import gsap from 'gsap'
import ProductCard from './ProductCard'
import { useGSAP } from '@gsap/react'
export const Search = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false)
    const { isDesktop } = useWindowSize()
    const [isSearch, setIsSearch] = useState(false)
    const [isSearchMobile, setIsSearchMobile] = useState(false)
    const searchContainerRef = useRef(null)
    const iconRef = useRef(null)
    const historyRef = useRef(null)

    useClickOutside(searchContainerRef, () => {
        setIsSearch(false)
    })

    useGSAP(() => {
        if (searchContainerRef.current) {
            gsap.to(searchContainerRef.current, {
                boxShadow: isSearch
                    ? '0px 3px 8px 3px rgba(0, 0, 0, 0.1)'
                    : '0px 0px 0px 0px rgba(0, 0, 0, 0)',
                height: isSearch ? '80vh' : "0",
                borderRadius: isSearch ? '12px' : '0px',
                duration: 0.4,
                ease: 'power2.out',
            })
        }
    }, [isSearch])

    useGSAP(() => {
        if (iconRef.current) {
            gsap.fromTo(
                iconRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' },
            )
        }
    }, [isSearch])

    useGSAP(() => {
        if (!historyRef.current) return

        if (isSearch) {
            gsap.fromTo(
                historyRef.current,
                { opacity: 0, height: 0 },
                {
                    opacity: 1,
                    height: 'auto',
                    duration: 0.4,
                    ease: 'power2.out',
                },
            )
        } else {
            gsap.to(historyRef.current, {
                opacity: 0,
                height: 0,
                duration: 0.3,
                ease: 'power2.inOut',
            })
        }
    }, [isSearch])

    const searchHandler = () => {
        setIsSearch(true)
    }

    const history = [
        { id: '1', text: 'تاریخچه 1' },
        { id: '2', text: 'تاریخچه 2' },
        { id: '3', text: 'تاریخچه 3' },
        { id: '4', text: 'تاریخچه 3' },
        { id: '5', text: 'تاریخچه 3' },
        { id: '6', text: 'تاریخچه 3' },
        { id: '7', text: 'تاریخچه 3' },
        { id: '8', text: 'تاریخچه 3' },
    ]

    if (isDesktop) {
        return (
            <div
                id="search"
                ref={searchContainerRef}
                onClick={searchHandler}
                className={`desktop:w-[55%] h-0 bg-bgPrimary gap-4 px-3 py-4 absolute top-0 left-1/2 translate-x-[-50%] flex flex-col items-center z-50`}>
                <div className='w-full flex flex-col gap-4 fixed top-4 px-3 bg-bgPrimary z-50'>
                <form action="" className="flex w-full ">
                    <div
                        className="flex w-full items-center relative text-textSecondary"
                        dir="rtl">
                        <input
                            type="text"
                            className="w-full cursor-pointer text-textSecondary rounded-lg py-4 pr-12 font-light border-[1px] border-textSecondary focus:placeholder:text-bgPrimary focus:outline-none focus:border-textPrimary focus:ring-0"
                            placeholder="به دنبال محصول خاصی می‌گردید؟"
                        />
                        <span ref={iconRef} className="absolute z-50 right-4">
                            {isSearch ? (
                                <Icons
                                    name="arrowRight"
                                    className="text-[24px] cursor-pointer text-textSecondary"
                                    onClick={e => {
                                        e.stopPropagation()
                                        setIsSearch(false)
                                    }}
                                />
                            ) : (
                                <Icons
                                    name="search"
                                    className="text-[24px] rotate-90 text-textSecondary"
                                />
                            )}
                        </span>
                    </div>
                </form>
                {isSearch && (
                    <div ref={historyRef} className="overflow-hidden w-full">
                        <SearchHistory histories={history} />
                    </div>
                )}
                </div>
                {isSearch && (
  <div
    className="w-full mt-44 grid grid-cols-1 tablet:grid-cols-2 gap-4 place-items-center font-font h-auto overflow-y-scroll transition-all duration-300 ease-in-out"
  >
    <ProductCard className="scale-90" />
    <ProductCard className="scale-90" />
    <ProductCard className="scale-90" />
  </div>
)}
            </div>
        )
    }

    return (
        <Drawer.Root dismissible={true} open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Trigger className="w-full">
                <div
                    id="search"
                    onClick={() => {
                        setIsSearchMobile(true)
                    }}
                    className={`container ${className} flex justify-center w-full`}>
                    <div className="flex  items-center text-textSecondary py-4 justify-end px-4 gap-2 font-light border-[1px] border-textSecondary rounded-lg w-full">
                        <p dir='rtl' className='text-[16px]'>جستجو کنید!</p>
                        <Icons
                            name="search"
                            className="text-[24px] rotate-90"
                        />
                    </div>
                </div>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
                <Drawer.Title className="hidden" />
                <Drawer.Content className="bg-bgPrimary z-50 h-[80vh] tablet:h-[95vh] flex flex-col fixed bottom-0 left-0 right-0 max-h-[100vh] rounded-t-[10px]">
                    <div className="w-full mx-auto overflow-auto container py-4 rounded-t-[10px]">

                        <div className="flex w-full top-0 py-4 left-1/2 -translate-x-1/2 container z-50 bg-bgPrimary flex-col fixed">
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
                        {isSearchMobile && (
                            <SearchHistory histories={history} />
                        )}
                        </div>
                        <div
                            dir="rtl"
                            className="w-full mt-44 grid grid-cols-1 tablet:grid-cols-2 gap-4 place-items-center font-font h-auto overflow-visible">
                                <ProductCard className=""/>
                                <ProductCard className=""/>
                                <ProductCard className=""/>



                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}
