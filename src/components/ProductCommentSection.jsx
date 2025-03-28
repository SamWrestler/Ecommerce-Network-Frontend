import ProductComments from './ProductComments'
import ProductOverallOverview from './ProductOverallOverview'

function ProductCommentSection() {
    return (
        <div className="flex flex-col gap-6 desktop:w-[70vw]">
            <ProductOverallOverview />
            <ProductComments />
        </div>
    )
}

export default ProductCommentSection
