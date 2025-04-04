'use client'
import defaultProfileImage from '../../public/images/defaultProfile.png'
import Image from 'next/image'
import React, { useState } from 'react'
import ProfileSidebar from '@/components/ProfileSidebar'
import CornerModal from '@/components/CornerModal'
import Login from '@/components/Login'
import Code from '@/components/Code'
import useWindowSize from '@/hooks/useWindowSize'
import { Drawer } from 'vaul'
import Link from 'next/link'

export default function HeaderProfilePicture() {
    const [openModal, setOpenModal] = useState(false)
    const [isClickDisabled, setIsClickDisabled] = useState(false)
    const [loggedIn] = useState(false)
    const [codePhase, setCodePhase] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { isDesktop } = useWindowSize()
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

    if (isDesktop) {
        return (
            <>
                <Image
                    alt="profile"
                    src={defaultProfileImage}
                    onClick={handleClick}
                    className="h-[30px] w-[30px] cursor-pointer object-cover rounded-full border-[0.6px] border-textPrimary"
                />
                {loggedIn ? (
                    <CornerModal
                        openModal={openModal}
                        setOpenModal={setOpenModal}>
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

    return (
        <>
            {!loggedIn ? (
                <Drawer.Root
                    dismissible={true}
                    open={isOpen}
                    onOpenChange={setIsOpen}>
                    <Drawer.Trigger className="cursor-pointer">
                        <Image
                            alt="profile"
                            src={defaultProfileImage}
                            onClick={handleClick}
                            className="h-[30px] w-[30px] cursor-pointer object-cover rounded-full border-[0.6px] border-textPrimary"
                        />
                    </Drawer.Trigger>

                    <Drawer.Portal>
                        <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
                        <Drawer.Title className="hidden" />

                        <Drawer.Content className="bg-white p-4 z-50 flex flex-col font-font gap-6 fixed bottom-0 left-0 right-0 max-h-[100vh] rounded-t-[10px]">
                            <Drawer.Handle />

                            {/* Make Table Scrollable on X-Axis */}
                            <div className="flex w-full h-full items-center pb-2">
                                {codePhase ? (
                                    <Code codeExpired={codeExpired} />
                                ) : (
                                    <Login loginSubmitted={loginSubmitted} />
                                )}
                            </div>
                        </Drawer.Content>
                    </Drawer.Portal>
                </Drawer.Root>
            ) : (
                <Link href={'/profile'}>
                    <Image
                        alt="profile"
                        src={defaultProfileImage}
                        onClick={handleClick}
                        className="h-[30px] w-[30px] cursor-pointer object-cover rounded-full border-[0.6px] border-textPrimary"
                    />
                </Link>
            )}
        </>
    )
}
