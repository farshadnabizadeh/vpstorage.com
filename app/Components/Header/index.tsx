'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Gear from '@/assets/svg/gear.svg'
import US from '@/assets/flags/US.png'
import IR from '@/assets/flags/IR.png'
import RU from '@/assets/flags/RU.png'
import Home from '@/assets/svg/home.svg'
import Server from '@/assets/svg/server.svg'
const index = () => {
    const [component, setComponent] = useState<any>('Home')
    let LanguageSelection = {
        component: US,
        title: 'United States'
    }
    return (
        <section className='absolute z-40 w-full h-16 flex justify-center bg-[#ECF0F1] text-black'>
            <div className='container h-full flex justify-between'>
                <div className='w-[40%] flex justify-center items-center'>
                    <ul className='w-full flex justify-between px-28'>
                        <li onClick={() => setComponent('Home')} className={`${component == 'Home' ? 'text-[#3C15CC]' : ''} text-lg cursor-pointer font-medium tracking-[0.02em] flex justify-center items-center`}><Image width={35} height={35} src={Home} alt='Home'/></li>
                        <li onClick={() => setComponent('Services')} className={`${component == 'Services' ? 'text-[#3C15CC]' : ''} text-lg cursor-pointer font-medium tracking-[0.02em] flex justify-center items-center`}><Image width={25} height={25} src={Server} alt='Services'/></li>
                        <li onClick={() => setComponent('Pricing')} className={`${component == 'Pricing' ? 'text-[#3C15CC]' : ''} text-lg cursor-pointer font-medium tracking-[0.02em]`}>Pricing</li>
                    </ul>
                </div>
                <div className='w-[20%] flex justify-center items-center'>
                    <div id='LogoContainer' className='w-12 h-12 rounded-full border-2 border-[#000000] p-[0.1rem]'>
                        <Image src={Gear} alt='Logo' />
                    </div>
                </div>
                <div className='w-[40%] flex justify-center items-center'>
                    <ul className='w-full flex justify-between items-center px-28'>
                        <li onClick={() => setComponent('Blog')} className={`${component == 'Blog' ? 'text-[#3C15CC]' : ''} text-lg cursor-pointer font-medium tracking-[0.02em]`}>Blog</li>
                        <li onClick={() => setComponent('Contact Us')} className={`${component == 'Contact Us' ? 'text-[#3C15CC]' : ''} text-lg cursor-pointer font-medium tracking-[0.02em]`}>Contact Us</li>
                        <li className='cursor-pointer text-lg font-normal tracking-[0.02em]'>
                            <div className='w-full h-full flex justify-center items-center'>
                                <div className='relative w-10 h-10 rounded-full border-[1px] border-[red]'>
                                    <Image fill src={LanguageSelection.component} alt={LanguageSelection.title} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default index
