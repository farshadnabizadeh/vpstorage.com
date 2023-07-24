'use client'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Logo from '@/assets/jpg/Logo.png'
import WhatsApp from '@/assets/svg/whapp.svg'
import Email from '@/assets/svg/email.svg'
import Linkedin from '@/assets/svg/linkedin.svg'
import Instagram from '@/assets/svg/instagram.svg'
import Youtube from '@/assets/svg/youtube.svg'
import Telegram from '@/assets/svg/Telegram.svg'
import useWindowDimensions from '@/Hooks/useWindowDimensions'

const Mobile = () => {
    return (
        <>
            <div className='relative w-full h-[300px] bg-[#212F3C]'>
                <div className='absolute w-full h-full flex justify-center'>
                    <div className='absolute w-40 h-40'>
                        <Image fill src={Logo} alt='Logo' />
                    </div>
                </div>
                <div className='w-full absolute top-36 flex justify-center'>
                    <ul className='w-[85%] mt-10 text-white flex justify-between'>
                        <li className='text-sm font-Kanit tracking-[1px] cursor-pointer'>Home</li>
                        <li className='text-sm font-Kanit tracking-[1px] cursor-pointer'>Services</li>
                        <li className='text-sm font-Kanit tracking-[1px] cursor-pointer'>Pricing</li>
                        <li className='text-sm font-Kanit tracking-[1px] cursor-pointer'>Blog</li>
                        <li className='text-sm font-Kanit tracking-[1px] cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
                <div className='w-full absolute top-52 flex justify-center'>
                    <ul className='w-[85%] mt-10 text-white flex justify-center'>
                        <li className='mx-3 flex items-center'>
                            <div className='w-6 h-6 cursor-pointer'><Image src={Linkedin} alt='LinkedIn' /></div>
                        </li>
                        <li className='mx-3 flex items-center'>
                            <div className='w-8 h-8 cursor-pointer'><Image src={Instagram} alt='Instagram' /></div>
                        </li>
                        <li className='mx-3 flex items-center'>
                            <div className='w-9 h-9 cursor-pointer'><Image src={Youtube} alt='Youtube' /></div>
                        </li>
                        <li className='mx-3 ml-1 flex items-center'>
                            <div className='w-7 h-7 cursor-pointer'><Image src={Telegram} alt='Telegram' /></div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
const Desktop = () => {
    return (
        <>
            <div className={`w-full flex justify-center bg-[#212F3C]`}>
                <div className='container h-full relative'>
                    <div className='w-full flex justify-center'>
                        <Image src={Logo} alt='Logo' />
                    </div>
                    <div className='w-full'>
                        <ul className='w-full lg:px-[300px] xl:px-[450px] 2xl:px-[500px] flex justify-between py-5'>
                            <li className='text-sm font-Kanit tracking-[1px] cursor-pointer'>Home</li>
                            <li className='text-sm font-Kanit tracking-[1px] cursor-pointer'>Services</li>
                            <li className='text-sm font-Kanit tracking-[1px] cursor-pointer'>Pricing</li>
                            <li className='text-sm font-Kanit tracking-[1px] cursor-pointer'>Blog</li>
                            <li className='text-sm font-Kanit tracking-[1px] cursor-pointer'>Contact Us</li>
                        </ul>
                    </div>
                    <div className='w-full h-[50px] border-[1px] border-b-[0px] rounded-t-xl border-[rgba(255,255,255,0.5)] mt-[50px] flex justify-between items-center px-[50px]'>
                        <div className='w-full'>
                            <ul className='flex w-full'>
                                <li className='lg:mr-0 xl:mr-16 flex items-center'>
                                    <div className='lg:w-6 lg:h-6 flxe justify-center items-center'><Image src={WhatsApp} alt='whatsapp' /></div>
                                    <div className='lg:mx-0 xl:mx-4 lg:text-xs font-Kanit xl:text-sm pt-1 lg:translate-x-2 xl:translate-x-0'>+90 ( 543 ) 899-10-63</div>
                                </li>
                                <li className='flex items-center'>
                                    <div className='w-6 h-6 lg:translate-x-10 xl:translate-x-0'><Image src={Email} alt='email' /></div>
                                    <div className='mx-4 font-Kanit text-sm pt-1 lg:translate-x-7 xl:translate-x-0'>farshadnabizadeh1993@gmail.com</div>
                                </li>
                            </ul>
                        </div>
                        <div className='w-full flex justify-end'>
                            <ul className='flex'>
                                <li className='mx-3 flex items-center'>
                                    <div className='w-6 h-6 cursor-pointer'><Image src={Linkedin} alt='LinkedIn' /></div>
                                </li>
                                <li className='mx-3 flex items-center'>
                                    <div className='w-8 h-8 cursor-pointer'><Image src={Instagram} alt='Instagram' /></div>
                                </li>
                                <li className='mx-3 flex items-center'>
                                    <div className='w-9 h-9 cursor-pointer'><Image src={Youtube} alt='Youtube' /></div>
                                </li>
                                <li className='mx-3 flex items-center'>
                                    <div className='w-7 h-7 cursor-pointer'><Image src={Telegram} alt='Telegram' /></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const index: FC = () => {
    const { height, width } = useWindowDimensions();
    const [template, setTemplate] = useState<any>();
    useEffect(() => {
        console.log(width)
        if (width <= 1024) { setTemplate(<Mobile />) }
        if (width > 1024) { setTemplate(<Desktop />) }
        // if (width > 375 && width <= 1024) { setTemplate(<Desktop />) }
    }, [width])
    return (
        <>
            {template}
        </>
    )
}
index.displayName = "index"
export default index
