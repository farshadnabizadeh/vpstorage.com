'use client'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import Home from '@/assets/jpg/Home.jpg'
interface widthProps {
    width?: any
}

const Desktop = () => {
    return (
        <>
            <section className='relative w-[86%] h-[500px] rounded-3xl mt-3'>
                <Image className='rounded-2xl' fill src={Home} alt='HomepageHero' />
                <div className='absolute top-0 left-0 w-[70%] h-full'>
                    <div className='w-full flex px-20 text-4xl font-medium tracking-[4px] mt-20'>VPSTORAGE</div>
                    <div className='lg:w-full xl:w-[80%] text-justify mt-6 flex items-center text-sm px-20'>
                        Welcome to our all-in-one online platform, your ultimate destination for top-notch VPN and
                        Storage Services! Safeguard your online privacy with our high-speed VPN connections, ensuring your
                        data remains encrypted and secure. Access geo-restricted content effortlessly while enjoying the convenience
                        of our reliable cloud storage solutions. Join us today and experience seamless browsing and
                        data protection in one place
                    </div>
                    <div className='px-20 mt-14'>
                        <div className='w-full h-[50px]'>
                            <button className='w-[75%] h-[50px] bg-gradient-to-r from-[#212F3C] to-[#000000] hover:from-[#000000] hover:to-[#212F3C] rounded-lg text-[#fff] border-2 border-[#fff] flex justify-center items-center'>
                                <span className='text-lg'>START</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
const Mobile = () => {
    return (
        <>
            <section className='relative w-full sm:w-[93%] h-[250px] md:h-[400px] rounded-none sm:rounded-3xl mt-0 sm:mt-3 mb-10'>
                <Image className='rounded-none sm:rounded-2xl' fill src={Home} alt='HomepageHero' />
                <div className='absolute z-0 top-0 w-full h-full bg-[rgba(0,0,0,0.6)] rounded-2xl'>

                </div>
                <div className='absolute z-20 top-0 left-0 w-full flex justify-center'>
                    <div className='w-[90%] max-w-[350px] mt-5 py-5 flex justify-center items-center text-white rounded-2xl bg-[rgba(255,255,255,0.3)]'>
                        <h1 className='tracking-[0.1rem] font-medium text-2xl'>VPSTORAGE</h1>
                    </div>
                </div>
                <div className='absolute z-30 top-44 md:top-32 left-0 w-full flex justify-center'>
                    <div className='w-full md:flex px-3 md:px-0 max-w-[609px] font-medium text-justify text-lg hidden'>
                        Welcome to our all-in-one online platform, your ultimate destination for top-notch VPN and Storage Services! 
                        Safeguard your online privacy with our high-speed VPN connections, ensuring your data remains encrypted and 
                        secure. Access geo-restricted content effortlessly while enjoying the convenience of our reliable cloud 
                        storage solutions. Join us today and experience seamless browsing and data protection in one place
                    </div>
                </div>
            </section>
        </>
    )
}
const index: FC<widthProps> = (width) => {
    const [template, setTemplate] = useState<any>();
    useEffect(() => {
        if (width.width <= 1024) { setTemplate(<Mobile />) }
        if (width.width > 1024) { setTemplate(<Desktop />) }
    }, [width])

    return (
        <>
            {template}
        </>
    )
}
index.displayName = "index"
export default index
