'use client'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import WhatsApp from '@/assets/svg/whapp.svg'
import Email from '@/assets/svg/email.svg'
import Logo from '@/assets/jpg/Logo.png'
import Desktop from './Partials/Desktop'
import Mobile from './Partials/Mobile'
import useWindowDimensions from '@/Hooks/useWindowDimensions'
const index: FC = () => {
    const { height, width } = useWindowDimensions();
    const [template, setTemplate] = useState<any>();
    useEffect(() => {
        console.log(width)
        if (width <= 400) { setTemplate(<Mobile />) }
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
