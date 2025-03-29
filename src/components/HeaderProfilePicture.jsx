'use client'
import defaultProfileImage from '../../public/images/defaultProfile.png'
import Image from 'next/image'
import React, { useState } from 'react'
import ProfileSidebar from '@/components/ProfileSidebar'
import CornerModal from '@/components/CornerModal'
import Login from '@/components/Login'
import Code from '@/components/Code'

export default function HeaderProfilePicture() {
    const [openModal, setOpenModal] = useState(false)
    const [isClickDisabled, setIsClickDisabled] = useState(false)
    const [loggedIn] = useState(false)
    const [codePhase, setCodePhase] = useState(false)

    const loginSubmitted = () => {
        setCodePhase(true)
    }

    const codeExpired = () => {
        setCodePhase(false)
    }

    const handleClick = () => {
        if (isClickDisabled) return // Prevent clicks while disabled

        setOpenModal(prev => !prev)
        setIsClickDisabled(true) // Disable further clicks

        // Re-enable clicking after 2 seconds
        setTimeout(() => {
            setIsClickDisabled(false)
        }, 500)
    }

    return (
        <>
            <Image
                alt="profile"
                src={defaultProfileImage}
                onClick={handleClick}
                className="h-[30px] w-[30px] cursor-pointer object-cover rounded-full border-[0.6px] border-textPrimary"
            />

            {loggedIn ? (
                <CornerModal openModal={openModal} setOpenModal={setOpenModal}>
                    <ProfileSidebar />
                </CornerModal>
            ) : (
                <CornerModal
                    overFlow={false}
                    openModal={openModal}
                    setOpenModal={setOpenModal}>
                    {codePhase ? (
                        <Code codeExpired={codeExpired} />
                    ) : (
                        <Login loginSubmitted={loginSubmitted} />
                    )}
                </CornerModal>
            )}
        </>
    )
}
