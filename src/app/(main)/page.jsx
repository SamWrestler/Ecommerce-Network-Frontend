import BusinessInformation from '@/components/BusinessInformation'
import Category from '@/components/Category'
import CollectionWrapper from '@/components/CollectionWrapper'
import Discount from '@/components/Discount'
import Footer from '@/components/Footer'
import HeroSlider from '@/components/HeroSlider'

export const metadata = {
    title: 'Laravel',
}
const Home = () => {
    return (
        <section id="main" className="font-font flex flex-col pb-24">
            <HeroSlider />
            <div className="flex flex-col gap-12">
                <Category />
                <CollectionWrapper text="بر اساس سلیقه شما" />
                <CollectionWrapper text="پرفروش‌ترین‌های این هفته 🔥" />
            </div>
            <Discount />
            <div className="container">
                <BusinessInformation />
            </div>
            <Footer />
        </section>
    )
}

export default Home
