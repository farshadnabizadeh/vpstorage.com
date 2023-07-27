'use client'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import SuccesssSVG from '@/assets/svg/success.svg'
import Slider from '../Components/Slider'
import useWindowDimensions from '@/Hooks/useWindowDimensions'
const page: FC = () => {
  const { height, width } = useWindowDimensions();
  const [template, setTemplate] = useState<any>();
  // useEffect(() => {
  //   if (width) {
  //     if (width <= 1024) { setTemplate(<Mobile width={width} />) }
  //     if (width > 1024) { setTemplate(<Desktop width={width} />) }
  //   }
  //   // if (width > 375 && width <= 1024) { setTemplate(<Desktop />) }
  // }, [width])
  return (
    <div className='w-full min-h-screen bg-white flex justify-center'>
      <div className='container h-full'>
        <div className='w-full flex justify-center mt-[70px]'>
          <Slider width={width} />
        </div>
        <div className='w-full h-full grid grid-cols-3 gap-10 px-[110px]'>
          <div className='my-10 rounded-lg border-[1px] border-[#555]'>
            <div className='rounded-t-lg w-full h-14 bg-[#212F3C] text-base text-[#fff] flex justify-center items-center tracking-[0.08rem]'>
              Plan 1
            </div>
            <div className='w-full h-[100px] flex justify-center items-center'>
              <div className='text-base font-semibold text-[#000] mx-1'>$</div>
              <div className='text-xl font-semibold text-[#000]'>200</div>
              <div className='text-base font-semibold text-[#000]'>.88</div>
            </div>
            <div className='w-full'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>2 CPU cores</div>
              </div>
            </div>
          </div>
          <div className='my-10 rounded-lg border-[1px] border-[#555]'>
            <div className='rounded-t-lg w-full h-14 bg-[#212F3C] text-base text-[#fff] flex justify-center items-center tracking-[0.08rem]'>
              Plan 1
            </div>
            <div className='w-full h-[100px] flex justify-center items-center'>
              <div className='text-base font-semibold text-[#000] mx-1'>$</div>
              <div className='text-xl font-semibold text-[#000]'>200</div>
              <div className='text-base font-semibold text-[#000]'>.88</div>
            </div>
            <div className='w-full'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className='my-10 rounded-lg border-[1px] border-[#555]'>
            <div className='rounded-t-lg w-full h-14 bg-[#212F3C] text-base text-[#fff] flex justify-center items-center tracking-[0.08rem]'>
              Plan 1
            </div>
            <div className='w-full h-[100px] flex justify-center items-center'>
              <div className='text-base font-semibold text-[#000] mx-1'>$</div>
              <div className='text-xl font-semibold text-[#000]'>200</div>
              <div className='text-base font-semibold text-[#000]'>.88</div>
            </div>
            <div className='w-full'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
page.displayName = "page"
export default page
