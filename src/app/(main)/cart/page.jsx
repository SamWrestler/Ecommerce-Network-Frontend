import CartProductCard from '@/components/CartProductCard'
import TopNavbar from '@/components/TopNavbar'
import Banks from '@/components/Banks'
import Address from '@/components/Address'
import Label from '@/components/Label'

function Cart() {
    return (
        <>
            <TopNavbar title="سبد خرید شما" />
            <div
                dir="rtl"
                className="flex flex-col gap-8 font-font desktop:flex-row desktop:justify-between font-medium container mt-[6rem] desktop:mt-4">
                <div className="flex flex-col">
                    <h2 className="text-textSecondary font-light">سبد خرید</h2>
                    <div className="flex flex-col gap-4">
                        <CartProductCard />
                        <CartProductCard />
                        <CartProductCard />
                        <CartProductCard />
                    </div>
                </div>

                <div className="flex flex-col gap-8 desktop:border desktop:border-border desktop:h-fit desktop:py-4 desktop:px-8 desktop:rounded-md desktop:sticky desktop:top-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-textSecondary font-light">
                            آدرس خود را انتخاب کنید
                        </h2>
                        <Address />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-textSecondary font-light">
                            درگاه پرداخت خود را انتخاب کنید
                        </h2>
                        <div className="flex items-center gap-4 ">
                            <Banks />
                        </div>
                    </div>

                    <div className="flex flex-col w-full gap-3">
                        <div className="flex w-full items-center justify-between">
                            <h2 className="text-[18px] font-medium">
                                خلاصه سبد خرید
                            </h2>
                            <p className="text-blue-500">3 کالا</p>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <Label text={'قیمت کالاها'} />
                            <p className="font-normal">1,150,000 ءتءء</p>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <Label text={'تخفیف کالاها'} />
                            <p className="font-normal text-error">
                                150,000 ءتءء
                            </p>
                        </div>
                        <div className="flex w-full items-center justify-between">
                            <Label text={'جمع سبد خرید'} />
                            <p className="text-[20px]">856,000 ءتءء</p>
                        </div>
                    </div>

                    <div className="flex border-t justify-between items-center p-2 !pr-0 border-textSecondary">
                        <button className="py-6 w-[11.5rem] rounded-md bg-textPrimary text-bgPrimary">
                            <h2>ادامه فرایند خرید</h2>
                        </button>
                        <div className="flex flex-col items-center">
                            <p className="flex font-light">جمع سبد خرید</p>
                            <h2>856,000 ءتءء</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
