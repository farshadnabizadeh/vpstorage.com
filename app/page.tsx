'use client'
import Image from 'next/image'
import vpnimage from '@/assets/jpg/vpnimage.jpg'
import vpnimage2 from '@/assets/jpg/vpnimage2.jpg'
import Slider from './Components/Slider'
import useWindowDimensions from '@/Hooks/useWindowDimensions'
import { useEffect, useState } from 'react'

const Desktop = () => {
  return (
    <>
      <section className='w-full flex justify-center'>
        <div className='container translate-y-[70px]'>
          <div className='w-full flex justify-center'>
            <Slider />
          </div>
          <div className='w-full flex justify-between mt-20 px-[107px] text-black'>
            <div className='w-[50%]  px-5'>
              <div className='w-full'>
                <h1 className='text-2xl font-Kanit font-bold'>Why Do I Need to Use a VPN ?</h1>
              </div>
              <div className='py-5 w-[90%]'>
                <p className='text-base font-medium w-full text-justify'>
                  A VPN (Virtual Private Network) is essential as it encrypts your internet traffic, ensuring your online activities and data remain private and secure. It becomes crucial on public Wi-Fi networks to protect sensitive information from potential threats.

                  VPN allows bypassing geo-restrictions, accessing content and services blocked in your region, such as streaming platforms and websites. By masking your IP address, it enables anonymous browsing, preventing online tracking.

                  In countries with strict internet censorship, VPNs provide a way to access restricted websites and communicate more freely. They can also prevent ISPs from throttling your internet speed based on online activities, ensuring consistent and faster connections.

                  For businesses, VPNs offer secure remote access to corporate networks, enabling employees to work from anywhere while maintaining data security.

                  Moreover, a VPN adds an extra layer of protection against potential hackers and identity theft, creating a secure and encrypted connection between your device and the VPN server.

                  In summary, VPNs are vital tools for online security, privacy, and accessing content, benefiting individuals and businesses in today's digital landscape.
                </p>
              </div>
            </div>
            <div className='relative w-[50%] h-[500px]'>
              <Image className='rounded-lg' fill src={vpnimage} alt='VPNImage' />
            </div>
          </div>
          <div className='w-full flex justify-between mt-20 px-[107px] text-black mb-[150px]'>
            <div className='relative w-[50%] h-[500px]'>
              <Image className='rounded-lg' fill src={vpnimage2} alt='VPNImage' />
            </div>
            <div className='w-[50%]'>
              <div className='translate-x-[40px]'>
                <h1 className='text-2xl font-Kanit font-bold'>How Can VPN Protected us in Internet ?</h1>
              </div>
              <div className='px-12 py-5'>
                <p className='text-base font-medium w-full text-justify'>
                  A VPN (Virtual Private Network) protects us on the internet by encrypting our internet traffic, ensuring that our online activities and data remain confidential and safe from potential threats like hackers and surveillance.

                  When using public Wi-Fi networks, a VPN acts as a shield, preventing malicious entities from intercepting our sensitive information, reducing the risk of data breaches.

                  Moreover, a VPN allows us to bypass geo-restrictions, granting access to content and services blocked in our region, such as streaming platforms and websites.

                  By masking our IP address, a VPN enables anonymous browsing, making it difficult for websites, advertisers, and governments to track our online behavior and location.

                  In regions with strict internet censorship, a VPN empowers us to access blocked websites and communicate more freely, preserving our online freedom.

                  Furthermore, a VPN can prevent Internet Service Providers (ISPs) from throttling our internet speed based on our online activities, ensuring a smoother browsing experience.

                  Overall, a VPN provides a robust solution to enhance our online privacy, security, and accessibility, making our internet usage safer, more private, and unrestricted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default function Home() {
  const { height, width } = useWindowDimensions();
  const [template, setTemplate] = useState<any>();
  useEffect(() => {
    console.log(width)
    if (width <= 375) { setTemplate(null) }
    if (width > 375 && width <= 1024) { setTemplate(<Desktop />) }
    if (width > 1024) { setTemplate(<Desktop />) }
  }, [width])
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {template}
    </main>
  )
}
