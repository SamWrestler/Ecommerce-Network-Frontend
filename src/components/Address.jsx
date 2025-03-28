import Icons from './Icons'

function Address({ edit = false }) {
    return (
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
            {edit ? (
                <Icons name="edit" className="text-[20px]" />
            ) : (
                <Icons name="chevronLeft" className="text-[20px]" />
            )}
        </div>
    )
}

export default Address
