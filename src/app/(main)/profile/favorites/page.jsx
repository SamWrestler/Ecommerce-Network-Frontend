import TopNavbar from '@/components/TopNavbar'
import FavoriteGrid from '@/components/FavoriteGrid'

function Favorites() {
    return (
        <>
            <TopNavbar title="لیست علاقه‌مندی‌ها" />
            <div
                dir="rtl"
                className="mt-[6rem] gap-6 grid grid-cols-2 tablet:grid-cols-3 container">
                <FavoriteGrid />
                <FavoriteGrid />
                <FavoriteGrid />
            </div>
        </>
    )
}

export default Favorites
