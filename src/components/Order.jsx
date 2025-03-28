import Icons from '@/components/Icons'
import OrderSlider from '@/components/OrderSlider'

export default function Order({ status }) {
    const orderCode = 12345
    return (
        <div className="flex flex-col gap-2">
            <div
                className={`flex flex-col gap-2 p-4 rounded-t-xl border-b border-dashed ${status === 'delivered' ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex items-center gap-2">
                    <Icons
                        name={status === 'delivered' ? 'check' : 'canceled'}
                        className={`${status === 'delivered' ? 'text-success' : 'text-error'} font-bold text-[20px]`}
                    />
                    <h2 className="font-semibold text-[18px]">
                        {status === 'delivered' ? 'تحویل شده' : 'لغو شده'}
                    </h2>
                </div>
                <h2 className={'font-normal text-[18px] text-textSecondary'}>
                    کد سفارش: {orderCode}
                </h2>
                <div className="flex items-center w-full justify-between">
                    <h2
                        className={
                            'font-normal text-[18px] text-textSecondary'
                        }>
                        24 دی 1403
                    </h2>
                    <h2
                        className={
                            'font-semibold text-[18px] text-textSecondary'
                        }>
                        1,456,000 ءتءء
                    </h2>
                </div>
            </div>
            <OrderSlider />
        </div>
    )
}
