import Comment from './Comment'
import Icons from './Icons'

function ProductComments() {
    return (
        <div className="flex flex-col gap-6 px-5 py-6 border border-textSecondary rounded-sm">
            <div className="flex flex-col gap-20">
                <Comment />
                <Comment />
                <Comment />
            </div>
            <div className="flex cursor-pointer hover:scale-105 transition-all flex-row-reverse justify-center gap-2 items-center text-[16px] text-blue-500">
                <h2 className="">مشاهده نظرات بیشتر</h2>
                <Icons name="plus" />
            </div>
        </div>
    )
}

export default ProductComments
