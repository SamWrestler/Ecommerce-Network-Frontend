import NewAddressForm from '@/components/NewAddressForm'
import ProfileLabel from '@/components/ProfileLabel'

export default function NewAddress() {
    return (
        <div className="flex flex-col w-full items-center">
            <ProfileLabel text="افزودن آدرس جدید" />
            <div dir="rtl" className="flex flex-col w-[80%]">
                <NewAddressForm className="mt-[2rem]" />
            </div>
        </div>
    )
}
