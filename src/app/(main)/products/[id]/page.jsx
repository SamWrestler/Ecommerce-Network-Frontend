import ProductDetail from '@/components/ProductDetail'
import ProductColors from '@/components/ProductColors'
import ProductPageImage from '@/components/ProductPageImage'
import ProductSizes from '@/components/ProductSizes'
import ProductCommentSection from '@/components/ProductCommentSection'
import FavoriteButton from '@/components/FavoriteButton'
import AddToCartButton from '@/components/AddToCartButton'

export const revalidate = 60

// async function getProduct(id) {
//     const res = await fetch(`https://fakestoreapi.com/products/${id}`)
//     if (!res.ok) throw new Error('Product not found')
//     return res.json()
// }

export async function generateStaticParams() {
    // const res = await fetch('https://fakestoreapi.com/products')
    // const products = await res.json()
    return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
}

export default async function ProductPage({ params }) {
    const data = await params
    const id = data.id
    const products = [
        {
            id: 1,
            title: 'تیشرت آبی',
            price: 295000,
            images: [
                '/images/Blue.png',
                '/images/Blue2.png',
                '/images/Blue3.png',
            ],
        },
        {
            id: 2,
            title: 'تیشرت زرد',
            price: 295000,
            images: [
                '/images/Blue.png',
                '/images/Blue2.png',
                '/images/Blue3.png',
            ],
        },
        {
            id: 3,
            title: 'سلام چطوری',
            price: 295000,
            images: [
                '/images/Blue.png',
                '/images/Blue2.png',
                '/images/Blue3.png',
            ],
        },
        {
            id: 4,
            title: 'من سامان هستم',
            price: 295000,
            images: [
                '/images/Blue.png',
                '/images/Blue2.png',
                '/images/Blue3.png',
            ],
        },
    ]
    const product = products.find(item => item.id == id)

    return (
        <div dir="rtl" className="flex flex-col gap-8 font-font">
            <div className="flex flex-col desktop:flex-row">
                {/* Slider for images */}
                <ProductPageImage images={product.images} />

                {/* Product Detail for all device and price only for mobile and tablet */}
                <div
                    dir="rtl"
                    className="flex flex-col container desktop:w-[50vw] font-font gap-4  mt-3">
                    <div className="flex flex-col gap-2 desktop:gap-6">
                        <div className="flex items-center justify-between ">
                            <div className="flex items-center   gap-2">
                                <h2 className="text-[22px] text-textPrimary font-medium">
                                    {product.title}
                                </h2>
                                <ProductDiscount className="desktop:hidden" />
                            </div>
                            <FavoriteButton />
                        </div>
                        <ProductPrice className="desktop:hidden" />
                        <div className="flex flex-col gap-6">
                            <ProductColors />
                            <ProductSizes />
                            <ProductDetail />
                        </div>
                    </div>
                </div>

                {/* Product price only for desktop */}
                <div className="p-1 w-[35vw] h-fit  desktop:flex justify-center sticky top-0 hidden">
                    <div className="border rounded-md flex flex-col items-start gap-8 w-full h-fit p-6 m-4">
                        <div className="flex items-start">
                            {/* Defined in this component */}
                            <ProductPrice />

                            {/* Defined in this component */}
                            <ProductDiscount />
                        </div>
                        <div className="flex flex-col gap-2 items-center w-full">
                            <hr className="w-full" />
                            <AddToCartButton className="w-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Comment Section */}
            <div className="flex w-full justify-center p-3">
                <ProductCommentSection />
            </div>
        </div>
    )
}

function ProductPrice({ className }) {
    return (
        <div
            className={`flex items-center gap-4 text-[18px] ${className} desktop:flex-col-reverse desktop:text-[20px]`}>
            <p className="text-error font-medium">456,000 ءتءء</p>
            <p className="text-textSecondary line-through desktop:text-[16px]">
                580,000 ءتءء
            </p>
        </div>
    )
}

function ProductDiscount({ className }) {
    return (
        <p
            className={`text-[16px] text-error opacity-60 font-light ${className}`}>
            (25% تخفیف)
        </p>
    )
}
