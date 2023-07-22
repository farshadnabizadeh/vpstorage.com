import React, { FC, useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/jpg/Logo.png'
import Menu from '@/assets/svg/humberger.svg'
import Close from '@/assets/svg/close.svg'
import Home from '@/assets/svg/home.svg'
import Server from '@/assets/svg/server.svg'
import Price from '@/assets/svg/price.svg'
import Blog from '@/assets/svg/blog.svg'
import Contactus from '@/assets/svg/contactus.svg'
import US from '@/assets/flags/US.png'
import IR from '@/assets/flags/IR.png'
import RU from '@/assets/flags/RU.png'
const Mobile: FC = () => {
    const [open, setOpen] = useState<any>(false)
    const [animationStatus, setAnimationStatus] = useState<any>()
    const [hiddenMenu, setHiddenMenu] = useState<any>(true)
    const [list, setList] = useState<any>(true)
    const [LanguageBarOpening, setLanguageBarOpening] = useState<any>('hidden');
    const [LanguageStatus, setLanguageStatus] = useState<any>(false)
    const [hidden, setHidden] = useState<any>(true)
    const openfunction = () => {
        setHiddenMenu(false)
        setAnimationStatus('openingSidebar')
        setOpen(true)
        setTimeout(() => {
            setList(false)
        }, 900)
    }
    const closefunction = () => {
        setAnimationStatus('closingSidebar')
        setList(true)
        setTimeout(() => {
            setOpen(false)
            setHiddenMenu(true)
        }, 1000)
    }
    const openLanguageBar = () => {
        if (LanguageStatus) {
            setHidden(true)
            setLanguageBarOpening('CloseLanguageBarAnnimation')
            setTimeout(() => {
                setLanguageStatus(false)
            }, 1000)
        } else {
            setTimeout(() => {
                setHidden(false)
            }, 1000)
            setLanguageStatus(true)
            setLanguageBarOpening('LanguageAnimation')
        }
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
                    <div className='h-full flex justify-center items-center'>
                        <div onClick={openLanguageBar} className='w-9 h-9 rounded-full bg-white flex justify-center items-center'>
                            <Image src={US} width={30} height={30} alt='Language' />
                        </div>
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
                        <div className='w-full'>
                            <ul className={`w-full ${list ? 'hidden' : 'block'}`}>
                                <li className='w-full flex  items-center py-4 border-b-2 border-t-2 border-[#ffffff]'>
                                    <div className='mx-4 w-10 h-10 rounded-full bg-white flex justify-center items-center'>
                                        <Image src={Home} width={30} height={30} alt='Home' />
                                    </div>
                                    <div>Home</div>
                                </li>
                                <li className='w-full flex items-center py-4 border-b-2 border-[#ffffff]'>
                                    <div className='flex justify-center items-center mx-4 w-10 h-10 rounded-full bg-white'>
                                        <Image src={Server} width={30} height={30} alt='Server' />
                                    </div>
                                    <div>Services</div>
                                </li>
                                <li className='w-full flex items-center py-4 border-b-2 border-[#ffffff]'>
                                    <div className='flex justify-center items-center mx-4 w-10 h-10 rounded-full bg-white'>
                                        <Image src={Price} width={30} height={30} alt='Price' />
                                    </div>
                                    <div>Price</div>
                                </li>
                                <li className='w-full flex items-center py-4 border-b-2 border-[#ffffff]'>
                                    <div className='flex justify-center items-center mx-4 w-10 h-10 rounded-full bg-white'>
                                        <Image src={Blog} width={30} height={30} alt='Blog' />
                                    </div>
                                    <div className=''>Blog</div>
                                </li>
                                <li className='w-full flex items-center py-4 border-b-2 border-[#ffffff]'>
                                    <div className='flex justify-center items-center mx-4 w-10 h-10 rounded-full bg-white'>
                                        <Image src={Contactus} width={30} height={30} alt='Contactus' />
                                    </div>
                                    <div className=''>Contact Us</div>
                                </li>
                            </ul>
                        </div>
                    </section> : null
            }
            {
                LanguageStatus ?
                    <section className={`${LanguageBarOpening} w-full h-[250px] bg-white flex justify-center`}>
                        <div className='w-[80%] h-full bg-[#212F3C] rounded-b-lg'>
                            <ul className={`w-full h-full translate-y-16 ${hidden ? 'hidden' : 'block'}`}>
                                <li className='w-full flex items-center py-4 border-b-2 border-[#ffffff]'>
                                    <div className='mx-4 relative w-9 h-7 rounded-full border-2 border-[#ffffff]'>
                                        <Image fill src={US} alt='United States' />
                                    </div>
                                    <div className='w-full h-full'>United States</div>
                                </li>
                                <li className='w-full flex items-center py-4 border-b-2 border-[#ffffff]'>
                                    <div className='mx-4 relative w-9 h-7 rounded-full border-2 border-[#ffffff]'>
                                        <Image fill src={IR} alt='Iran' />
                                    </div>
                                    <div className='w-full h-full'>Iran</div>
                                </li>
                                <li className='w-full flex items-center py-4 border-b-2 border-[#ffffff]'>
                                    <div className='mx-4 relative w-9 h-7 rounded-full border-2 border-[#ffffff]'>
                                        <Image fill src={RU} alt='Russia' />
                                    </div>
                                    <div className='w-full h-full'>Russia</div>
                                </li>
                            </ul>
                        </div>
                    </section> : null
            }
        </div>
    )
}
Mobile.displayName = "Mobile"
export default Mobile
