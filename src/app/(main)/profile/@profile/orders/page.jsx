import FormLabel from '@/components/FormLabel'
import Icons from '@/components/Icons'
import Order from '@/components/Order'
import ProfileLabel from '@/components/ProfileLabel'

export default function Orders() {
    const activeOrders = 4
    return (
        <div className="flex flex-col gap-6 w-full items-center p-2">
            <ProfileLabel text="سفارشات من" />
            <div dir={'rtl'} className="flex font-font flex-col  gap-8 w-full">
                <div className="flex flex-col gap-2 ">
                    <FormLabel text="سفارشات در جریان" />
                    <div className="w-full tablet:w-[50%] flex items-center justify-around py-5 px-3 rounded-xl bg-textPrimary  border-border">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-bgPrimary font-medium text-[20px]">
                                شما {activeOrders} سفارش در جریان دارید
                            </h2>
                            <p className="font-light text-success">
                                پیگیری سفارشات
                            </p>
                        </div>
                        <Icons
                            name={'progress'}
                            className={'text-[35px] text-bgPrimary'}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <FormLabel text="سفارشات در جریان" />
                    <div className={'w-full flex justify-around items-center'}>
                        <div className="flex flex-col gap-2">
                            <div className={'relative'}>
                                <Icons
                                    name={'truck'}
                                    className={'text-[50px]'}
                                />
                                <div className="w-6 h-6 flex items-center justify-center text-light  rounded-full bg-success text-bgPrimary absolute -top-3 -left-3">
                                    <p className={'text-[16px]'}>4</p>
                                </div>
                            </div>
                            <h2>تحویل شده</h2>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className={'relative'}>
                                <Icons
                                    name={'cartCancel'}
                                    className={'text-[50px]'}
                                />
                                <div className="w-6 h-6 flex items-center justify-center text-light  rounded-full bg-error text-bgPrimary absolute -top-3 -left-3">
                                    <p className={'text-[16px]'}>4</p>
                                </div>
                            </div>
                            <h2>لغو شده</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <FormLabel text="همه سفارشات" />
                    <div className="w-full grid grid-cols-2 gap-6">
                        <Order status={'delivered'} />
                        <Order status={'canceled'} />
                        <Order status={'canceled'} />
                        <Order status={'delivered'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
