import Icons from './Icons'

function ProductOverallOverview() {
    return (
        <div className="flex w-full flex-col gap-8 border border-textSecondary  py-8 px-6 rounded-t-[2.5rem] rounded-b-sm">
            <div className="flex items-center justify-between">
                <h2 className="text-[25px] font-medium">نظرات و امتیازات</h2>
                <div className="flex flex-row-reverse items-center gap-1 cursor-pointer hover:scale-105 transition-all text-blue-500">
                    <p className="text-[16px]">ثبت نظر جدید</p>
                    <Icons name="plus" />
                </div>
            </div>
            <div className="flex items-center gap-6">
                <h2 className="font-medium text-[40px]">4,2</h2>
                <div className="flex flex-col gap-4 items-start">
                    <div className="flex items-center gap-1 text-[25px] text-warning">
                        <Icons name="star" />
                        <Icons name="star" />
                        <Icons name="star" />
                        <Icons name="star" />
                        <Icons name="star" />
                    </div>
                    <p className="text-[18px] font-light text-textSecondary opacity-50">
                        بر اساس 492 نظر
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductOverallOverview
