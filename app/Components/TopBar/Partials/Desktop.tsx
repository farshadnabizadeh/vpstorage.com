import React, { FC } from 'react'
import Image from 'next/image'
import WhatsApp from '@/assets/svg/whapp.svg'
import Email from '@/assets/svg/email.svg'
import Logo from '@/assets/jpg/Logo.png'
const Desktop: FC = () => {
    return (
        <section className='w-full h-[50px] flex justify-center bg-[#212F3C] text-white'>
            <div className='container h-full flex justify-between items-center px-28'>
                <div>
                    <ul className='flex'>
                        <li className='mr-16 flex items-center'>
                            <div className='w-5 h-5'><Image src={WhatsApp} alt='whatsapp' /></div>
                            <div className='mx-4 font-Kanit text-sm pt-1'>+90 ( 543 ) 899-10-63</div>
                        </li>
                        <li className='flex items-center'>
                            <div className='w-6 h-6'><Image src={Email} alt='email' /></div>
                            <div className='mx-4 font-Kanit text-sm pt-1'>farshadnabizadeh1993@gmail.com</div>
                        </li>
                    </ul>
                </div>
                <div>
                    <Image width={50} height={50} src={Logo} alt='Logo' />
                </div>
            </div>
        </section>
    )
}
Desktop.displayName = "Desktop"
export default Desktop
