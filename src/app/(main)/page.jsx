import Category from '@/components/Category'
import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <section id="main" className="font-font">
            <Header />
            <HeroSlider />
            <Category />
        </section>
    )
}

export default Home
