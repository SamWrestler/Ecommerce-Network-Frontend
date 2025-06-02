'use client'
import { useRef, useState } from 'react'
import Icons from '@/components/Icons'
import Address from '@/components/Address'
import FormLabel from '@/components/FormLabel'
import ProfileLabel from '@/components/ProfileLabel'

function MyInformation() {
    const [name, setName] = useState('سامان مختاری')
    const [gender, setGender] = useState('مرد')
    const [email, setEmail] = useState('saman.mokhtari99@gmail.com')
    const [phone, setPhone] = useState('09352214805')
    const [birthDate, setBirthDate] = useState('11/12/1380')
    const [editName, setEditName] = useState(false)
    const [editGender, setEditGender] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [editPhone, setEditPhone] = useState(false)
    const [editBirthDate, setEditBirthDate] = useState(false)

    const inputRef = useRef(null) // Create a reference for the input field

    const handleEditClick = setter => {
        setter(true)
        inputRef.current.focus()
    }

    return (
        <div className="w-full flex items-center flex-col gap-6 p-2">
            <ProfileLabel text="اطلاعات من" />
            <div
                dir="rtl"
                className="flex flex-col w-[80%] justify-center font-font gap-4">
                <div className="w-[7rem] flex-shrink-0 flex items-center justify-center h-[7rem] rounded-full bg-border">
                    <Icons
                        name="userPen"
                        className="text-textSecondary text-[30px]"
                    />
                </div>
                <form action="#">
                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <FormLabel text=" نام و نام‌خانوادگی" />
                        <div className="w-full flex relative">
                            <input
                                ref={inputRef} // Attach the reference to the input field
                                type="text"
                                className="w-full py-4 rounded-sm disabled:opacity-30"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                disabled={!editName}
                            />
                            <Icons
                                onClick={() => handleEditClick(setEditName)}
                                name="edit"
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px]"
                            />
                        </div>
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col gap-1 mt-4">
                        <FormLabel text="جنسیت" />
                        <div className="w-full flex relative">
                            <select
                                className="w-full py-4 rounded-sm disabled:opacity-30"
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                                disabled={!editGender}>
                                <option value="man">آقا</option>
                                <option value="women">خانم</option>
                            </select>
                            <Icons
                                onClick={() => handleEditClick(setEditGender)}
                                name="edit"
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px]"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1 mt-4">
                        <FormLabel text="آدرس ایمیل" />
                        <div className="w-full flex relative">
                            <input
                                ref={inputRef}
                                type="email"
                                className="w-full py-4 rounded-sm disabled:opacity-30"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                disabled={!editEmail}
                            />
                            <Icons
                                onClick={() => handleEditClick(setEditEmail)}
                                name="edit"
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px]"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1 mt-4">
                        <FormLabel text="شماره تلفن" />
                        <div className="w-full flex relative">
                            <input
                                dir="rtl"
                                ref={inputRef}
                                type="tel"
                                className="w-full py-4 rounded-sm disabled:opacity-30"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                                disabled={!editPhone}
                            />
                            <Icons
                                onClick={() => handleEditClick(setEditPhone)}
                                name="edit"
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px]"
                            />
                        </div>
                    </div>

                    {/* Birth Date */}
                    <div className="flex flex-col gap-1 mt-4">
                        <FormLabel text="تاریخ تولد" />
                        <div className="w-full flex relative">
                            <input
                                dir="rtl"
                                ref={inputRef}
                                type="date"
                                className="w-full py-4 rounded-sm disabled:opacity-30"
                                value={birthDate}
                                onChange={e => setBirthDate(e.target.value)}
                                disabled={!editBirthDate}
                            />
                            <Icons
                                onClick={() =>
                                    handleEditClick(setEditBirthDate)
                                }
                                name="edit"
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px]"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <FormLabel text="آدرس‌ها" />
                        <div className="flex flex-col gap-2">
                            <Address edit={true} />
                            <Address edit={true} />
                            <Address edit={true} />
                        </div>
                    </div>

                    <button className="py-6 w-full rounded-md bg-textPrimary text-bgPrimary mt-6 hover:scale-[.99] transition-all">
                        اعمال تغییرات
                    </button>
                </form>
            </div>
        </div>
    )
}

export default MyInformation
