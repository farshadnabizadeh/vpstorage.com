'use client'
import React, { FC, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Lang } from '@/data/Language'
import US from '@/assets/flags/US.png'
import IR from '@/assets/flags/IR.png'
import RU from '@/assets/flags/RU.png'
interface languagePopupStatusProps {
    languagePopupStatus?: boolean,
    clicking?: any,
    addLanguage?: any,
}
const index: FC<languagePopupStatusProps> = (props) => {
    const { languagePopupStatus } = props
    const wrapperRef = useRef<any>(null);
    const addLanguage = (data: any) => {
        props.addLanguage(data)
    }
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                props.clicking(false)
                // setlanguagePopupStatus(false);
                console.log(event.target)
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    const Languages = Lang
    return (
        <>
            {
                languagePopupStatus ?
                    <section className='absolute top-0 h-full w-full flex justify-center z-30'>
                        <div className='relative container h-full'>
                            <div className='absolute h-full top-0 right-0 w-[40%]'>
                                <div className='h-full absolute top-0 right-0 w-[50%]'>
                                    <div ref={wrapperRef} className='w-full translate-y-[120px] translate-x-[-10px]'>
                                        <ul className='w-full bg-[#212F3C] rounded-lg'>
                                            {
                                                Languages.map((item, index) => (
                                                    <li onClick={() => addLanguage(item)} key={index} className='w-full h-[50px] rounded-lg py-5 flex border-b-[1px] border-[#ffffff] text-white cursor-pointer hover:bg-slate-700'>
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
