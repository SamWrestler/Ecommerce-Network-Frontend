import Icons from "./Icons";
function ProductDetail() {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-[18px] font-normal">جزئیات محصول</h2>
            <div className="flex gap-x-8 gap-y-4 flex-wrap desktop:w-full">
                <div className="flex justify-around text-[18px] font-light gap-1 border border-textSecondary items-center py-1 px-4 rounded-md cursor-pointer">
                    <Icons name="shirt"/>
                    <p>100% پنبه</p>
                </div>
                <div className="flex justify-around text-[18px] font-light gap-1 border border-textSecondary items-center py-1 px-4 rounded-md cursor-pointer">
                    <Icons name="expand"/>
                    <p>از S تا 3XL</p>
                </div>
                <div className="flex justify-around text-[18px] font-light gap-1 border border-textSecondary items-center py-1 px-4 rounded-md cursor-pointer">
                    <Icons name="vest"/>
                    <p>از S تا 3XL</p>
                </div>
            </div>
        </div>
     );
}

export default ProductDetail;
