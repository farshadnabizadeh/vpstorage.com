'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import US from '@/assets/flags/US.png'
import IR from '@/assets/flags/IR.png'
import RU from '@/assets/flags/RU.png'
interface languagePopupStatusProps {
    languagePopupStatus?: boolean,
}
const index: FC<languagePopupStatusProps> = (props) => {
    const { languagePopupStatus } = props

    const Languages = [
        {
            "Name": "United States",
            "Flag": US
        },
        {
            "Name": "Iran",
            "Flag": IR
        },
        {
            "Name": "Russia",
            "Flag": RU,
        },
    ]
    return (
        <>
            {
                languagePopupStatus ?
                    <section className='absolute top-0 h-full w-full flex justify-center z-30'>
                        <div className='relative container h-full'>
                            <div className='absolute h-full top-0 right-0 w-[40%]'>
                                <div className='h-full absolute top-0 right-0 w-[50%]'>
                                    <div className='w-full translate-y-[120px] translate-x-[-10px]'>
                                        <ul className='w-full bg-[#212F3C] rounded-lg'>
                                            {
                                                Languages.map((item, index) => (
                                                    <li key={index} className='w-full h-[50px] rounded-lg py-5 flex border-b-[1px] border-[#ffffff] text-white cursor-pointer hover:bg-slate-700'>
                                                        <div className='w-[30%] h-full flex justify-center items-center'>
                                                            <div className='relative w-[30px] h-[30px]'>
                                                                <Image fill src={item.Flag} alt={item.Name} />
                                                            </div>
                                                        </div>
                                                        <div className='w-[70%] text-lg flex items-center tracking-[0.03em]'>{item.Name}</div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> : null
            }
        </>
    )
}
index.displayName = "index"
export default index
