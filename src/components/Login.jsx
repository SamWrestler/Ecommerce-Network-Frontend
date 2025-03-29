import Label from '@/components/Label'
import Icons from '@/components/Icons'

export default function Login({ loginSubmitted }) {
    return (
        <div dir="rtl" className="w-full flex flex-col gap-4">
            <h2 className="font-semibold text-[18px]">ورود به حساب کاربری</h2>
            <div className="flex flex-col w-full gap-2">
                <Label
                    text={'شماره تلفن خود را جهت ورود یا ثبت نام وارد کنید'}
                />
                <form action="#" className="w-full flex flex-col gap-4">
                    <div className="w-full relative">
                        <input
                            type="tel"
                            className="w-full border py-3 pl-14  border-border rounded-md text-textPrimary focus:ring-0 focus:border focus:border-textSecondary "
                            placeholder="09129999999"
                        />
                        <div className="flex items-center gap-3 flex-row-reverse absolute left-4 top-1/2 -translate-y-1/2">
                            <Icons
                                name={'hashtag'}
                                className="text-[20px] text-textSecondary"
                            />
                            <div className="flex w-[0.7px] h-[20px] bg-textSecondary"></div>
                        </div>
                    </div>
                    <button
                        onClick={e => {
                            e.preventDefault()
                            loginSubmitted()
                        }}
                        className="w-full flex justify-center items-center text-bgPrimary rounded-md  py-4 bg-textPrimary">
                        ورود / ثبت‌نام
                    </button>
                </form>
            </div>
        </div>
    )
}
