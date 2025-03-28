import Category from '@/components/Category'
import Filters from '@/components/Filters'
import Icons from '@/components/Icons'
import ProductCard from '@/components/ProductCard'

function Products() {
    return (
        <div
            dir="rtl"
            className="flex gap-8 tablet:px-8 font-font flex-col items-start px-3 mt-[7.5rem] desktop:mt-[0.5rem]">
            <div className="flex flex-col gap-3 w-full desktop:hidden">
                <h2 className="font-semibold text-[18px]">فیلتر بر اساس</h2>
                <Filters />
            </div>

            <div className="flex flex-col gap-3 w-full">
                <Category products={true} />
            </div>

            <div
                dir="rtl"
                className="w-full flex justify-between flex-row-reverse gap-1 items-start">
                <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 place-items-center gap-y-6 w-full desktop:w-[65vw]">
                    <ProductCard href="/products/1" />
                    <ProductCard href="/products/1" />
                    <ProductCard href="/products/1" />
                    <ProductCard href="/products/1" />
                    <ProductCard href="/products/1" />
                    <ProductCard href="/products/1" />
                    <ProductCard href="/products/1" />
                    <ProductCard href="/products/1" />
                </div>
                <div className="flex-col gap-4 w-[27vw] sticky top-3 p-2 !pt-0 hidden desktop:flex">
                    <h2 className="font-semibold text-[18px] w-full">
                        فیلتر بر اساس
                    </h2>
                    <div className="flex  flex-col gap-4 p-2">
                        <div className="flex p-4 !pr-0 cursor-pointer hover:bg-gray-50 hover:rounded-t-md text-[20px] items-center justify-between w-full border-b border-border">
                            <p>سایز</p>
                            <Icons name="chevronLeft" />
                        </div>
                        <div className="flex p-4 !pr-0 cursor-pointer hover:bg-gray-50 hover:rounded-t-md text-[20px] items-center justify-between w-full border-b border-border">
                            <p>جنس</p>
                            <Icons name="chevronLeft" />
                        </div>
                        <div className="flex p-4 !pr-0 cursor-pointer hover:bg-gray-50 hover:rounded-t-md text-[20px] items-center justify-between w-full border-b border-border">
                            <p>رنگ</p>
                            <Icons name="chevronLeft" />
                        </div>
                        <div className="flex p-4 !pr-0 cursor-pointer hover:bg-gray-50 hover:rounded-t-md text-[20px] items-center justify-between w-full border-b border-border">
                            <p>قیمت</p>
                            <Icons name="chevronLeft" />
                        </div>
                        <div className="flex p-4 !pr-0 cursor-pointer hover:bg-gray-50 hover:rounded-t-md text-[20px] items-center justify-between w-full border-b border-border">
                            <p>استایل</p>
                            <Icons name="chevronLeft" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
