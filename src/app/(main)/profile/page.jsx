import TopNavbar from '@/components/TopNavbar'
import ProfileSidebar from '@/components/ProfileSidebar'

function Profile() {
    return (
        <>
            <div className="desktop:hidden">
                <TopNavbar title="پروفایل" />
                <ProfileSidebar />
            </div>
        </>
    )
}

export default Profile
