import Icons from '@/components/Icons'
import Label from '@/components/Label'
import Link from 'next/link'

export default function ProfileSidebar({ closeModal }) {
    return (
        <div
            dir="rtl"
            className="w-full font-font flex flex-col gap-8 mt-[6.2rem] desktop:mt-0">
            {/*Profile Photo and Information*/}
            <div className="flex justify-between gap-4 !w-full ">
                <div className="w-[7rem] flex-shrink-0 flex items-center justify-center h-[7rem] rounded-full bg-border">
                    <Icons
                        name="user"
                        className="text-textSecondary text-[30px]"
                    />
                </div>
                <div className="flex items-start justify-between w-full pl-2 pt-2">
                    <div className="flex flex-col gap-4 items-start">
                        <div className="flex flex-col gap-2">
                            <Label text="نام و نام‌خانوادگی" />
                            <h2 className="text-textPrimary font-medium text-[20px]">
                                سامان مختاری
                            </h2>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label text="امتیاز خرید شما" />
                            <h2 className="text-success font-medium text-[20px]">
                                1,234
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/*Invitation*/}
            <div className="flex w-full p-3 bg-textPrimary rounded-md justify-between items-center">
                <div className="flex items-center gap-4 text-bgPrimary">
                    <Icons name="users" className="text-[20px]" />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[18px] font-medium ">
                            دعوت از دوستان
                        </h2>
                        <p className="flex font-light text-border">5% تخفیف</p>
                    </div>
                </div>
                <div className="flex items-start border border-border h-fit p-2 text-bgPrimary gap-2 rounded-md">
                    <h2>کپی کد معرف</h2>
                    <Icons name="link" />
                </div>
            </div>

            {/*Buttons*/}
            <div className="flex flex-col gap-8 w-full">
                <div className="flex flex-col gap-3 w-full">
                    <Label text="تنظیمات حساب کاربری" />
                    <Link
                        href="/profile/my-information"
                        onClick={closeModal}
                        className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-[3.2rem] h-[3.2rem] flex items-center justify-center bg-bgInput rounded-full">
                                <Icons
                                    name="addressCard"
                                    className="text-[20px]"
                                />
                            </div>
                            <h2 className="font-medium text-[18px]">
                                اطلاعات من
                            </h2>
                        </div>
                        <Icons name="chevronLeft" className="text-[20px]" />
                    </Link>
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <Label text="سفارشات" />
                    <Link
                        href="/profile/favorites"
                        onClick={closeModal}
                        className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-[3.2rem] h-[3.2rem] flex items-center justify-center bg-bgInput rounded-full">
                                <Icons
                                    name="heartOutline"
                                    className="text-[20px]"
                                />
                            </div>
                            <h2 className="font-medium text-[18px]">
                                لیست علاقه‌مندی‌ها
                            </h2>
                        </div>
                        <Icons name="chevronLeft" className="text-[20px]" />
                    </Link>
                    <Link
                        href="/profile/orders"
                        onClick={closeModal}
                        className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-[3.2rem] h-[3.2rem] flex items-center justify-center bg-bgInput rounded-full">
                                <Icons
                                    name="shoppingBagsLight"
                                    className="text-[20px]"
                                />
                            </div>
                            <h2 className="font-medium text-[18px]">
                                سفارشات من
                            </h2>
                        </div>
                        <Icons name="chevronLeft" className="text-[20px]" />
                    </Link>
                </div>

                <div className="flex flex-col gap-3 w-full">
                    <Label text="پشتیبانی" />
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-[3.2rem] h-[3.2rem] flex items-center justify-center bg-bgInput rounded-full">
                                <Icons
                                    name="headsetLight"
                                    className="text-[20px]"
                                />
                            </div>
                            <h2 className="font-medium text-[18px]">
                                پشتیبانی
                            </h2>
                        </div>
                        <Icons name="chevronLeft" className="text-[20px]" />
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-[3.2rem] h-[3.2rem] flex items-center justify-center rounded-full">
                                <Icons
                                    name="logout"
                                    className="text-[20px] text-error"
                                />
                            </div>
                            <h2 className="font-medium text-[18px] text-error">
                                خروج از حساب کاربری
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
