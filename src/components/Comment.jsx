import pfp from '/public/images/defaultProfile.png'
import Image from 'next/image'
import Icons from './Icons'
function Comment() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
                <Image
                    alt="profile"
                    src={pfp}
                    className="h-[60px] w-[60px] object-cover rounded-full  border-[0.6px] border-textPrimary"
                />
                <div className="flex flex-col items-start gap-2">
                    <h2 className="font-medium text-[20px]">سامان مختاری</h2>
                    <div className="flex items-center gap-1 text-[18px] text-warning">
                        <Icons name="star" />
                        <Icons name="star" />
                        <Icons name="star" />
                        <Icons name="star" />
                        <Icons name="star" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex items-end justify-between'>
                    <h2 className='text-[20px] font-semibold'>بسیار تیشرت عالی</h2>
                    <div className='flex items-center gap-4 text-[25px]'>
                        <div className='flex flex-col gap-1'>
                        <Icons name="thumbsUp"/>
                        <p className='text-[16px] text-textSecondary opacity-50 font-light'>24</p>
                        </div>
                        <div className='flex flex-col gap-1'>
                        <Icons name="thumbsDown" className="text-blue-500"/>
                        <p className='text-[16px] text-textSecondary opacity-50 font-light text-blue-500'>36</p>
                        </div>
                    </div>
                </div>
                <p className='text-textSecondary text-justify text-[18px]/8'>
                ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                </p>
                <div className='flex flex-col gap-2 bg-bgInput rounded-lg border border-border p-4'>
                    <h2 className='text-[20px] font-medium'>ادمین سایت</h2>
                    <p className='text-[18px]/8 text-textSecondary text-justify'>از اینکه از خرید خود راضی بودید بسیار خرسیندیم جناب آقای مختاری</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
