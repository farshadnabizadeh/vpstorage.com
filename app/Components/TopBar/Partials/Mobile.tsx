import React, { FC, useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/jpg/Logo.png'
import Menu from '@/assets/svg/humberger.svg'
import Close from '@/assets/svg/close.svg'
const Mobile: FC = () => {
    const [open, setOpen] = useState<any>(false)
    const [animationStatus, setAnimationStatus] = useState<any>()
    const [hiddenMenu, setHiddenMenu] = useState<any>(true)
    const openfunction = () => {
        setHiddenMenu(false)
        setAnimationStatus('openingSidebar')
        setOpen(true)
    }
    const closefunction = () => {
        setAnimationStatus('closingSidebar')
        setTimeout(() => {
            setOpen(false)
            setHiddenMenu(true)
        }, 1000)
    }
    return (
        <div className='w-full relative'>
            <section className='w-full absolute z-0 h-[50px] bg-[#212F3C]'>
                <div className='flex justify-between h-full'>
                    <div className='w-[50%] h-full flex items-center px-5'>
                        {hiddenMenu ? <div onClick={openfunction} className='ratate relative m-2 w-9 h-9 rounded-full border-[1px] border-[#ffffff]'>
                            <Image className='p-2' fill src={Menu} alt='Menu' />
                        </div> : null}
                    </div>
                    <div className='w-[50%] h-full flex justify-end items-center px-5'>
                        <Image width={50} height={50} src={Logo} alt='Logo' />
                    </div>
                </div>
            </section>
            {
                open ?
                    <section className={`${animationStatus} absolute w-[50%] min-h-screen z-10 bg-[#212F3C]`}>
                        <div className='w-full flex items-center h-[50px] px-5'>
                            <div onClick={closefunction} className='relative m-2 w-9 h-9'>
                                <Image className='p-2' fill src={Close} alt='Menu' />
                            </div>
                        </div>
                    </section> : null
            }
        </div>
    )
}
Mobile.displayName = "Mobile"
export default Mobile
