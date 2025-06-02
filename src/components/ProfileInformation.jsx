'use client'
import { useRef, useState } from 'react'
import Icons from '@/components/Icons'
import Address from '@/components/Address'
import FormLabel from '@/components/FormLabel'
import DatePicker from 'react-multi-date-picker'
import jalali from 'react-date-object/calendars/jalali'
import persian_fa from 'react-date-object/locales/persian_fa'
import DateObject from 'react-date-object'
import Link from 'next/link'
import PrimaryButton from '@/components/PrimaryButton'

function ProfileInformation() {
    const jalaliRaw = new DateObject({ calendar: jalali, locale: persian_fa })
    const [name, setName] = useState('سامان مختاری')
    const [gender, setGender] = useState('مرد')
    const [email, setEmail] = useState('saman.mokhtari99@gmail.com')
    const [phone, setPhone] = useState('09352214805')
    const [birthDate, setBirthDate] = useState(jalaliRaw.format('YYYY/MM/DD'))

    const [editName, setEditName] = useState(false)
    const [editGender, setEditGender] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [editPhone, setEditPhone] = useState(false)
    const [editBirthDate, setEditBirthDate] = useState(false)

    const inputRef = useRef(null)

    const handleEditClick = setter => {
        setter(true)
        inputRef.current?.focus()
    }

    return (
        <form
            action="#"
            dir="rtl"
            className="flex flex-col font-font gap-4 w-[80%]">
            {/* Profile Icon */}
            <div className="flex w-full justify-start">
                <div className="w-[7rem] h-[7rem]  rounded-full bg-border flex items-center justify-center self-center">
                    <Icons
                        name="userPen"
                        className="text-textSecondary text-[30px]"
                    />
                </div>
            </div>

            {/* Name */}
            <Field
                label="نام و نام‌خانوادگی"
                value={name}
                onChange={setName}
                isEditable={editName}
                onEdit={() => handleEditClick(setEditName)}
                type="text"
                inputRef={inputRef}
            />

            {/* Gender */}
            <div className="flex flex-col gap-1">
                <FormLabel text="جنسیت" />
                <div className="relative w-full">
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
            <Field
                label="آدرس ایمیل"
                value={email}
                onChange={setEmail}
                isEditable={editEmail}
                onEdit={() => handleEditClick(setEditEmail)}
                type="email"
                inputRef={inputRef}
            />

            {/* Phone */}
            <Field
                label="شماره تلفن"
                value={phone}
                onChange={setPhone}
                isEditable={editPhone}
                onEdit={() => handleEditClick(setEditPhone)}
                type="tel"
                inputRef={inputRef}
            />

            {/* Birth Date */}
            <Field
                label="تاریخ تولد"
                value={birthDate}
                onChange={setBirthDate}
                isEditable={editBirthDate}
                onEdit={() => handleEditClick(setEditBirthDate)}
                type="date"
                inputRef={inputRef}
                birthDate={birthDate}
                setBirthDate={setBirthDate}
            />

            {/* Addresses */}
            <div className="flex flex-col gap-2 mt-4">
                <FormLabel text="آدرس‌ها" />
                {[...Array(3)].map((_, i) => (
                    <Address key={i} edit={true} />
                ))}
                <Link
                    href="/profile/my-information/new-address"
                    className="flex items-center gap-2 group">
                    <Icons
                        name="plus"
                        className="group-hover:rotate-90 transition-all"
                    />
                    <p className="text-[16px] font-light  group-hover:scale-105 transition-all">
                        افزودن آدرس جدید
                    </p>
                </Link>
            </div>

            {/* Submit Button */}
            <PrimaryButton text="اعمال تغییرات" />
        </form>
    )
}

function Field({
    label,
    value,
    onChange,
    isEditable,
    onEdit,
    type = 'text',
    inputRef,
    birthDate = null,
    setBirthDate = null,
}) {
    return (
        <div className="flex flex-col gap-1">
            <FormLabel text={label} />
            <div className="w-full relative">
                {type !== 'date' ? (
                    <input
                        ref={inputRef}
                        type={type}
                        className="w-full py-4 rounded-sm disabled:opacity-30"
                        value={value}
                        onChange={e => onChange(e.target.value)}
                        disabled={!isEditable}
                        dir="rtl"
                    />
                ) : (
                    <DatePicker
                        value={birthDate}
                        onChange={date => {
                            if (date) setBirthDate(date.format('YYYY/MM/DD'))
                        }}
                        calendar={jalali}
                        locale={persian_fa}
                        calendarPosition="bottom-right"
                        editable={false}
                        disabled={!isEditable}
                        inputClass="!w-full py-4 rounded-sm disabled:opacity-30 font-font"
                        containerStyle={{ width: '100%' }}
                    />
                )}
                <Icons
                    onClick={onEdit}
                    name="edit"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[18px] cursor-pointer hover:scale-105 transition-all"
                />
            </div>
        </div>
    )
}

export default ProfileInformation
