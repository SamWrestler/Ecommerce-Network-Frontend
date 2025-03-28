'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Icons from './Icons'
import useWindowSize from '@/hooks/useWindowSize'

function Faq({ className }) {
    const { isDesktop } = useWindowSize()
    const faqs = [
        {
            id: 1,
            question: 'سایز مناسب خود را چگونه پیدا کنم؟',
            answer: 'برای پیدا کردن سایز مناسب خود، می‌توانید از جدول سایزهای ما استفاده کنید. اندازه‌گیری‌های دقیق خود را بر اساس اندازه‌گیری‌های جدول مقایسه کنید تا مناسب‌ترین سایز را انتخاب کنید.',
        },
        {
            id: 2,
            question: 'آیا می‌توانم سفارشم را لغو کنم؟',
            answer: 'بله، شما می‌توانید سفارشتان را قبل از ارسال لغو کنید. لطفاً سریعاً با تیم پشتیبانی ما تماس بگیرید تا درخواست لغو شما پردازش شود.',
        },
        {
            id: 3,
            question: 'چطور می‌توانم وضعیت سفارش خود را پیگیری کنم؟',
            answer: 'پس از ارسال سفارش، شما یک شماره پیگیری دریافت خواهید کرد. با وارد کردن این شماره در بخش پیگیری سفارش در وبسایت ما، می‌توانید وضعیت ارسال خود را بررسی کنید.',
        },
        {
            id: 4,
            question: 'آیا امکان بازگشت یا تعویض کالا وجود دارد؟',
            answer: 'بله، شما می‌توانید کالاهای خریداری شده را ظرف 7 روز پس از دریافت بازگشت یا تعویض کنید، به شرطی که کالای مورد نظر آسیب ندیده باشد و بسته‌بندی اولیه حفظ شده باشد.',
        },
        {
            id: 5,
            question: 'آیا امکان ارسال رایگان وجود دارد؟',
            answer: 'بله، ما ارسال رایگان را برای سفارش‌هایی که مبلغ آنها از حد معینی بالاتر باشد، ارائه می‌دهیم. برای اطلاع از شرایط دقیق، لطفاً به بخش ارسال و حمل و نقل مراجعه کنید.',
        },
        {
            id: 6,
            question: 'چطور می‌توانم پرداخت خود را انجام دهم؟',
            answer: 'شما می‌توانید از روش‌های مختلف پرداخت مانند کارت‌های بانکی، پرداخت آنلاین، و یا پرداخت در محل استفاده کنید. همه گزینه‌های پرداخت در حین فرآیند خرید در دسترس شما قرار خواهند گرفت.',
        },
        {
            id: 7,
            question: 'آیا امکان خرید به صورت عمده وجود دارد؟',
            answer: 'بله، ما فروش عمده نیز انجام می‌دهیم. اگر قصد خرید عمده دارید، لطفاً با تیم فروش ما تماس بگیرید تا جزئیات بیشتری در مورد تخفیف‌ها و شرایط فروش عمده دریافت کنید.',
        },
    ]

    return (
        <div
            id="faq"
            className={`flex flex-col container desktop:w-[70%] h-[45vh] desktop:h-[35vh] shadow-custom p-2 rounded-md ${className}`}>
            <Swiper
                direction={isDesktop ? 'horizontal' : 'vertical'}
                loop={true}
                pagination={isDesktop ? { type: 'progressbar' } : false}
                modules={[Pagination]}
                className="w-full ">
                {faqs.map(faq => (
                    <SwiperSlide
                        key={faq.id}
                        className="w-full desktop:mt-4 h-auto">
                        <div className="flex flex-col h-full">
                            <div className="flex flex-col">
                                <div className="flex w-full gap-4 text-right p-4 items-center justify-start flex-row-reverse">
                                    <Icons name="quote" />
                                    <h2 className="text-textPrimary text-[18px]/7 font-semibold">
                                        {faq.question}
                                    </h2>
                                </div>

                                <p
                                    dir="rtl"
                                    className="text-justify px-4 text-textPrimary text-[18px]/10 transition-all flex">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex py-4 justify-center items-center">
                {isDesktop ? (
                    <Icons name="leftRight" className="text-[35px]" />
                ) : (
                    <Icons name="downUp" className="text-[25px]" />
                )}
            </div>
        </div>
    )
}

export default Faq
