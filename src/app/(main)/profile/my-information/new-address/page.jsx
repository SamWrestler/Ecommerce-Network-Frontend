import TopNavbar from '@/components/TopNavbar'
import NewAddressForm from '@/components/NewAddressForm'

export default function NewAddress() {
    return (
        <>
            <TopNavbar title="افزودن آدرس جدید" />
            <div dir="rtl" className="flex flex-col container">
                <NewAddressForm className="mt-[6.2rem]" />
            </div>
        </>
    )
}
