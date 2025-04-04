import Icons from '@/components/Icons'

export default function Notification() {
    return (
        <div
            dir={'rtl'}
            className="flex flex-col border-b border-border pb-8 pt-8 first:pt-0 rounded-t-md">
            <div className="flex justify-center items-center gap-2">
                <div className="flex justify-center flex-shrink-0  items-center relative w-[4rem] h-[4rem] rounded-full bg-bgInput">
                    <Icons
                        name="robot"
                        className="text-textSecondary text-[25px]"
                    />
                    <div className="flex w-[1.4rem] items-center justify-center h-[1.4rem] bg-bgPrimary rounded-full absolute bottom-0 left-[2px]">
                        <div className="flex w-[1rem] h-[1rem] bg-success rounded-full"></div>
                    </div>
                </div>
                <div className="flex flex-col  gap-2 items-center w-full">
                    <div className="flex flex-col  gap-2 items-center w-full">
                        <div className="flex w-full justify-between  items-center">
                            <h2 className="text-[18px] text-textPrimary font-medium">
                                پیام سیستم
                            </h2>
                            <div className="flex w-2 h-2 bg-textPrimary rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex w-full justify-between  items-center">
                        <p className="text-[16px] text-textPrimary font-light">
                            چهارشنبه 14:26
                        </p>
                        <p className="text-[16px] text-textPrimary font-light">
                            2 ساعت پیش
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex p-2 bg-bgInput mt-4 rounded-md">
                <p className="flex w-full text-justify">
                    سفارش شما به شماره 41223 با موفقیت ثبت شد و در حال
                    آماده‌سازی می‌باشد!
                </p>
            </div>
        </div>
    )
}
