import ProfileSidebar from '@/components/ProfileSidebar'

export default function ProfileSlotLayout({ children }) {
    return (
        <div dir="rtl" className="flex w-full p-4 justify-around font-font">
            <aside className="w-[25vw] flex flex-col p-2">
                <ProfileSidebar />
            </aside>
            <div className="w-[70vw] shadow-custom p-4 rounded-xl flex justify-center">
                {children}
            </div>
        </div>
    )
}
