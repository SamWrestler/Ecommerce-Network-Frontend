import CartProductCard from '@/components/CartProductCard'
import Link from 'next/link'
import Icons from '@/components/Icons'

export default function Cart() {
    return (
        <div dir="rtl" className="w-full flex flex-col relative ">
            <div className="w-full flex items-center justify-between py-2">
                <h2 className="font-semibold text-[18px]">سبد خرید شما</h2>
                <Link
                    href={''}
                    className="flex items-center gap-2 text-textSecondary">
                    <div className="font-light">مشاهده سبد خرید</div>
                    <Icons name={'externalLink'} className="-rotate-90" />
                </Link>
            </div>
            <div className="flex flex-col gap-8 w-full  mt-4">
                <CartProductCard />
                <CartProductCard />
                <CartProductCard />
                <CartProductCard />
            </div>
        </div>
    )
}
