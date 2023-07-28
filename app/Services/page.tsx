'use client'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import SuccesssSVG from '@/assets/svg/success.svg'
import Slider from '../Components/Slider'
import useWindowDimensions from '@/Hooks/useWindowDimensions'
const Page: FC = () => {
  const { width } = useWindowDimensions();
  return (
    <div className='w-full min-h-screen bg-white flex justify-center'>
      <div className='container h-full'>
        <div className='w-full flex justify-center mt-[50px] lg:mt-[70px]'>
          <Slider width={width} />
        </div>
        <div className='w-full h-full grid lg:grid-cols-2 xl:grid-cols-3 gap-10 px-[30px] sm:px-[50px] lg:px-[110px]'>
          <div className='mb-6 sm:my-10 rounded-lg border-[1px] border-[#555] bg-[#212F3C]'>
            <div className='rounded-t-lg w-full h-14 bg-[#212F3C] text-base text-[#fff] flex justify-center items-center tracking-[0.1rem]'>
              Plan A
            </div>
            <div className='w-full h-[100px] flex justify-center items-center bg-[#fff]'>
              <div className='text-base font-semibold text-[#000] mx-1'>$</div>
              <div className='text-xl font-semibold text-[#000]'>5</div>
              <div className='text-base font-semibold text-[#000]'>.00</div>
            </div>
            <div className='w-full py-2 border-b-[1px] border-t-[1px] border-[#555] bg-[#fff]'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>2 CPU cores</div>
              </div>
            </div>
            <div className='w-full py-2 border-b-[1px] border-[#555] bg-[#fff]'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>4 GB RAM</div>
              </div>
            </div>
            <div className='w-full py-2 border-b-[1px] border-[#555] bg-[#fff]'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>1 TB Trafic</div>
              </div>
            </div>
            <div className='w-full py-2 bg-[#fff]'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>High Performance</div>
              </div>
            </div>
            <div className='w-full'>
              <div className='w-full h-14 flex items-center justify-center bg-[#212F3C] rounded-b-lg hover:bg-[#1A5276] hover:cursor-pointer'>
                <div className='text-lg text-[#fff]'>Buy</div>
              </div>
            </div>
          </div>


          <div className='mb-6 sm:my-10 rounded-lg border-[1px] border-[#555] bg-[#212F3C]'>
            <div className='rounded-t-lg w-full h-14 bg-[#212F3C] text-base text-[#fff] flex justify-center items-center tracking-[0.1rem]'>
              Plan B
            </div>
            <div className='w-full h-[100px] flex justify-center items-center bg-white'>
              <div className='text-base font-semibold text-[#000] mx-1'>$</div>
              <div className='text-xl font-semibold text-[#000]'>10</div>
              <div className='text-base font-semibold text-[#000]'>.00</div>
            </div>
            <div className='w-full py-2 border-b-[1px] border-t-[1px] border-[#555] bg-white'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>2 CPU cores</div>
              </div>
            </div>
            <div className='w-full py-2 border-b-[1px] border-[#555] bg-white'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>4 GB RAM</div>
              </div>
            </div>
            <div className='w-full py-2 border-b-[1px] border-[#555] bg-white'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>1 TB Trafic</div>
              </div>
            </div>
            <div className='w-full py-2 border-b-[1px] border-[#555] bg-white'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>High Performance</div>
              </div>
            </div>
            <div className='w-full'>
              <div className='w-full h-14 flex items-center justify-center bg-[#212F3C] rounded-b-lg hover:bg-[#1A5276] hover:cursor-pointer'>
                <div className='text-lg text-[#fff]'>Buy</div>
              </div>
            </div>
          </div>


          <div className='mb-6 sm:my-10 rounded-lg border-[1px] border-[#555] bg-[#212F3C]'>
            <div className='rounded-t-lg w-full h-14 bg-[#212F3C] text-base text-[#fff] flex justify-center items-center tracking-[0.1rem]'>
              Plan C
            </div>
            <div className='w-full h-[100px] flex justify-center items-center bg-white'>
              <div className='text-base font-semibold text-[#000] mx-1'>$</div>
              <div className='text-xl font-semibold text-[#000]'>15</div>
              <div className='text-base font-semibold text-[#000]'>.00</div>
            </div>
            <div className='w-full py-2 border-b-[1px] border-t-[1px] border-[#555] bg-white'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>2 CPU cores</div>
              </div>
            </div>
            <div className='w-full py-2 border-b-[1px] border-[#555] bg-white'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>4 GB RAM</div>
              </div>
            </div>
            <div className='w-full py-2 border-b-[1px] border-[#555] bg-white'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>1 TB Trafic</div>
              </div>
            </div>
            <div className='w-full py-2 border-b-[1px] border-[#555] bg-white'>
              <div className='flex items-center'>
                <div className='w-8 h-8 relative translate-x-[20px]'>
                  <Image fill src={SuccesssSVG} alt="plans" />
                </div>
                <div className='text-base text-[#555] font-semibold flex items-center translate-x-[50px]'>High Performance</div>
              </div>
            </div>
            <div className='w-full'>
              <div className='w-full h-14 flex items-center justify-center bg-[#212F3C] rounded-b-lg hover:bg-[#1A5276] hover:cursor-pointer'>
                <div className='text-lg text-[#fff]'>Buy</div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
Page.displayName = "Page"
export default Page
