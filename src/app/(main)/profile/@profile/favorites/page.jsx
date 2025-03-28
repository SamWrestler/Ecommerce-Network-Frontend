import FavoriteGrid from '@/components/FavoriteGrid'
import ProfileLabel from '@/components/ProfileLabel'
import Icons from '@/components/Icons'

function Favorites() {
    return (
        <div className="flex flex-col gap-6 w-full items-center p-2">
            <div className="flex w-full justify-between">
                <ProfileLabel text={'لیست علاقه‌مندی‌ها'} />
                <Icons name="plus" className="text-[25px]" />
            </div>
            <div
                dir="rtl"
                className="grid grid-cols-3 place-items-stretch w-full mt-2">
                <FavoriteGrid />
                <FavoriteGrid />
                <FavoriteGrid />
            </div>
        </div>
    )
}

export default Favorites
