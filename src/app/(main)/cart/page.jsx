import CartProductCart from '@/components/CartProductCart'
import Icons from '@/components/Icons'
import ProductNavbar from '@/components/ProductNavbar'
import Banks from '@/components/Banks'
function Cart() {
    return (
        <>
            <ProductNavbar />
            <div
                dir="rtl"
                className="flex flex-col gap-8 font-font desktop:flex-row desktop:justify-between font-medium container mt-[6rem] desktop:mt-4">
                <div className="flex flex-col">
                    <h2 className="text-textSecondary font-light">سبد خرید</h2>
                    <div className="flex flex-col gap-4">
                        <CartProductCart />
                        <CartProductCart />
                        <CartProductCart />
                        <CartProductCart />
                    </div>
                </div>

                <div className='flex flex-col gap-8 desktop:border desktop:border-border desktop:h-fit desktop:py-4 desktop:px-8 desktop:rounded-md desktop:sticky desktop:top-4'>
                <div className="flex flex-col gap-2">
                    <h2 className="text-textSecondary font-light">
                        آدرس خود را انتخاب کنید
                    </h2>
                    <div className="flex items-center justify-between w-full border border-border rounded-xl p-2 !pl-3">
                        <div className="flex items-center gap-2 w-[80%]">
                            <div className="w-[4.2rem] h-[4.2rem] rounded-xl  border flex-shrink-0 border-textSecondary flex justify-center items-center text-[30px] text-textSecondary">
                                <Icons name="locationDot" />
                            </div>
                            <div className="flex flex-col w-full h-full gap-2 items-start justify-between">
                                <h2 className="text-[20px] text-textPrimary font-semibold">
                                    خانه
                                </h2>
                                <p className=" truncate w-[75%] text-textSecondary font-light">
                                    انتهای خیابان معلم - کوچه جلالی کوچه هدایتی
                                </p>
                            </div>
                        </div>
                        <Icons name="chevronLeft" className="text-[20px]" />
                    </div>
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
                        <h2 className="text-textSecondary  font-normal">
                            قیمت کالاها
                        </h2>
                        <p className="font-normal">1,150,000 ءتءء</p>
                    </div>
                    <div className="flex w-full items-center justify-between">
                        <h2 className="text-textSecondary font-normal">
                            تخفیف کالاها
                        </h2>
                        <p className="font-normal text-error">150,000 ءتءء</p>
                    </div>
                    <div className="flex w-full items-center justify-between">
                        <h2 className="font-normal text-textSecondary">
                            جمع سبد خرید
                        </h2>
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
