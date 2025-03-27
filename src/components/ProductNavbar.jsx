'use client'
import { useState, useEffect } from 'react'
import Icons from './Icons'
import { usePathname, useRouter } from 'next/navigation'
import { Search } from './Search'
function ProductNavbar() {
    const router = useRouter()
    const [scrolled, setScrolled] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const pathName = usePathname()
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }

            if (window.scrollY > lastScrollY) {
                setScrolled(false)
            } else {
                setScrolled(true)
            }

            setLastScrollY(window.scrollY)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    return (
        <nav
            className={`flex px-4 py-5 fixed top-0 w-full bg-bgPrimary z-40 font-font items-center flex-row-reverse justify-between transition-transform duration-300 desktop:hidden
                ${scrolled ? 'shadow-custom  translate-y-0' : '-translate-y-full '}`}>
            <div
                className={`flex items-center ${pathName !== "/products" && "gap-4"} flex-row-reverse ${pathName === "/products" && "w-full"}`}
                >

                <div onClick={() => {
                    router.back()
                }} className="w-10 h-10 flex justify-center items-center rounded-lg border border-textPrimary">
                    <Icons name="arrowRight" className="text-[25px]" />
                </div>

                {pathName !== '/products' ? (
                    <h2 className="text-[18px] font-medium">{pathName === "/cart" ? "سبد خرید شما" : "جزئیات محصول"}</h2>
                ) :
                    <Search />
                }
            </div>
            {pathName !== '/products' && pathName !== '/cart' && (
                <Icons name="shoppingBag" className="text-[30px] relative px-2">
                    <div className="bg-success w-4 h-4 rounded-full flex justify-center items-center absolute top-0 right-0">
                        <p className="text-[12px] text-bgPrimary font-normal font-font">
                            3
                        </p>
                    </div>
                </Icons>
            )}
        </nav>
    )
}

export default ProductNavbar
