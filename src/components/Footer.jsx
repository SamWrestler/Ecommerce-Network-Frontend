import React from 'react'
import Icons from './Icons'
import Link from 'next/link'
import location from '/public/images/Location.jpg'

import Image from 'next/image'
function Footer() {
    return (
        <footer className="w-full container flex flex-col gap-20 mt-28">
            <div className="w-full flex flex-col tablet:flex-row tablet:justify-between gap-8 tablet:gap-8">
                <div className="flex items-center flex-row-reverse justify-between tablet:gap-10">
                    <div className="flex gap-4 items-center flex-row-reverse">
                        <Icons
                            name="headset"
                            className="text-[40px] text-[300]"
                        />
                        <div
                            dir="rtl"
                            className="flex flex-col gap-2 text-[18px]">
                            <h2 className="text-[20px] font-medium">
                                تماس با پشتیبانی
                            </h2>
                            <p className="font-light text-textSecondary">
                                24 ساعت 7 روز هفته
                            </p>
                        </div>
                    </div>
                    <Link
                        href="tel:+989352214805"
                        className="flex  justify-normal items-center py-3 px-6 rounded-md border border-textPrimary">
                        تماس
                    </Link>
                </div>
                <div className="flex items-center flex-row-reverse justify-between tablet:gap-10">
                    <div className="flex gap-4 items-center flex-row-reverse">
                        <div className="w-[3.2rem] h-[3.2rem] bg-textPrimary rounded-md flex justify-center items-center">
                            <Icons
                                name="phone"
                                className="text-bgPrimary text-center text-[25px]"
                            />
                        </div>
                        <div
                            dir="rtl"
                            className="flex flex-col-reverse gap-2 text-[18px]">
                            <h2 dir="rtl" className="text-[20px] font-medium">
                                اپلیکیشن #0.03
                            </h2>
                            <p className="font-light text-textSecondary">
                                تجربه خریدی بهتر در
                            </p>
                        </div>
                    </div>
                    <Link
                        href="tel:+989352214805"
                        className="flex text-bgPrimary bg-textPrimary justify-normal items-center py-3 px-6 rounded-md border border-textPrimary">
                        دانلود
                    </Link>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-2 desktop:w-[60%] ">
                    <p
                        dir="rtl"
                        className="font-light text-textSecondary text-[18px]">
                        اولین نفری باشید که از تخفیف‌ها باخبر می‌شوید!
                    </p>
                    <h2 dir="rtl" className="text-[20px] font-medium">
                        عضویت در خبرنامه
                    </h2>
                    <form
                        action="#"
                        dir="rtl"
                        className="flex items-center justify-between">
                        <input
                            type="email"
                            placeholder="ایمیل خود را وارد کنید ..."
                            className="w-[75%] p-4 rounded-md"
                        />
                        <button className="flex justify-center items-center bg-textPrimary py-4 w-[23%] rounded-md text-bgPrimary">
                            عضویت
                        </button>
                    </form>
                </div>
            </div>
            <div dir="rtl" className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[20px] font-medium">
                        <Icons name="locationDot" />
                        <h2>آدرس مجموعه</h2>
                    </div>
                    <p className="text-[18px]/8 text-justify">
                        شریعتی انتهای خیابان معلم کوچه جلالی کوچه هدایتی پلاک 3
                        واحد 6
                    </p>
                </div>
                <Link
                    href=""
                    className="border border-textPrimary tablet:w-[50%] desktop:w-[35%] rounded-lg overflow-hidden">
                    <Image src={location} alt="LocationPicture" />
                </Link>
            </div>
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-[20px] font-medium">
                    ما را در شبکه‌های اجتماعی دنبال کنید
                </h2>
                <div className="flex items-center gap-8">
                    <Link href="" className="text-[30px]">
                        <Icons name="telegram" />
                    </Link>
                    <Link href="" className="text-[30px]">
                        <Icons name="instagram" />
                    </Link>
                    <Link href="" className="text-[30px]">
                        <Icons name="twitter" />
                    </Link>
                    <Link href="" className="text-[30px]">
                        <Icons name="whatsapp" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
