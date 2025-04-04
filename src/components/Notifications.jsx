import Icons from '@/components/Icons'
import { Drawer } from 'vaul'
import React, { useState } from 'react'
import Notification from '@/components/Notification'
import useWindowSize from '@/hooks/useWindowSize'
import CornerModal from '@/components/CornerModal'

export default function Notifications() {
    const [isOpen, setIsOpen] = useState(false)
    const { isDesktop } = useWindowSize()

    const [openModal, setOpenModal] = useState(false)
    const [isClickDisabled, setIsClickDisabled] = useState(false)
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
                <Icons
                    onClick={handleClick}
                    name="bell"
                    className="text-[24px] cursor-pointer relative px-2">
                    <div className="bg-warning w-4 h-4 rounded-full flex justify-center items-center absolute bottom-0 right-0">
                        <p className="text-[12px] text-textPrimary font-normal font-font">
                            3
                        </p>
                    </div>
                </Icons>
                <CornerModal
                    cart={true}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    overFlow={false}>
                    <div className="flex flex-col w-full items-center">
                        <div
                            dir={'rtl'}
                            className="w-full flex justify-between items-center">
                            <div className="flex items-center gap-2 py-2">
                                <h2 className="font-medium text-[20px]">
                                    اعلان‌ها
                                </h2>
                                <div className="flex items-center rounded-full justify-center w-8 h-8 bg-bgInput">
                                    <p className="">24</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-success">
                                <Icons name="checkDouble" />
                                <h2>خواندن همه</h2>
                            </div>
                        </div>
                        <div
                            className={
                                'flex flex-col w-full overflow-y-scroll h-[60vh]'
                            }>
                            <NotificationsContent />
                        </div>
                    </div>
                </CornerModal>
            </>
        )
    }
    return (
        <>
            <Drawer.Root
                dismissible={true}
                open={isOpen}
                onOpenChange={setIsOpen}>
                <Drawer.Trigger className="cursor-pointer">
                    <Icons name="bell" className="text-[24px] relative px-2">
                        <div className="bg-warning w-4 h-4 rounded-full flex justify-center items-center absolute bottom-0 right-0">
                            <p className="text-[12px] text-textPrimary font-normal font-font">
                                3
                            </p>
                        </div>
                    </Icons>
                </Drawer.Trigger>

                <Drawer.Portal>
                    <Drawer.Overlay className="fixed inset-0 bg-black/40 z-40" />
                    <Drawer.Title className="hidden" />
                    <Drawer.Content className="bg-bgPrimary py-4 px-2 z-50 flex flex-col font-font gap-6 fixed bottom-0 left-0 right-0 max-h-[90vh] rounded-t-[10px]">
                        <Drawer.Handle />
                        <div
                            dir={'rtl'}
                            className="w-full flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <h2 className="font-medium text-[20px]">
                                    اعلان‌ها
                                </h2>
                                <div className="flex items-center rounded-full justify-center w-8 h-8 bg-bgInput">
                                    <p className="">24</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-success">
                                <Icons name="checkDouble" />
                                <h2>خواندن همه</h2>
                            </div>
                        </div>
                        <div className="flex flex-col overflow-y-scroll h-[70vh]">
                            <NotificationsContent />
                        </div>
                    </Drawer.Content>
                </Drawer.Portal>
            </Drawer.Root>
        </>
    )
}

function NotificationsContent() {
    return (
        <div dir="rtl" className="flex flex-col w-full p-2 gap-4">
            <div dir={'ltr'} className="flex flex-col ">
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </div>
        </div>
    )
}
