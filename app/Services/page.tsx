import React, { FC } from 'react'

const page: FC = () => {
  return (
    <div className='w-full min-h-screen bg-white flex justify-center'>
      <div className='container h-full'>
        <div className='w-full h-full grid grid-cols-3 gap-28 translate-y-[65px]'>
          <div className='my-10 rounded-lg'>
            <div className='rounded-t-lg w-full h-14 bg-[#212F3C] text-base text-[#fff] flex justify-center items-center tracking-[0.08rem]'>
              Plan 1
            </div>
            <div className='w-full h-[150px] flex justify-center items-center border-[1px] border-[#555] rounded-b-lg'>
              <div className='text-base font-semibold text-[#000] mx-1'>$</div>
              <div className='text-xl font-semibold text-[#000]'>200</div>
              <div className='text-base font-semibold text-[#000]'>.88</div>
            </div>
          </div>
          <div className='my-10 rounded-lg'>
            <div className='rounded-t-lg w-full h-14 bg-[#212F3C] text-base text-[#fff] flex justify-center items-center tracking-[0.08rem]'>
              Plan 1
            </div>
            <div className='w-full h-[150px] flex justify-center items-center'>
              <div className='text-base font-semibold text-[#000] mx-1'>$</div>
              <div className='text-xl font-semibold text-[#000]'>200</div>
              <div className='text-base font-semibold text-[#000]'>.88</div>
            </div>
          </div>
          <div className='my-10 rounded-lg'>
            <div className='rounded-t-lg w-full h-14 bg-[#212F3C] text-base text-[#fff] flex justify-center items-center tracking-[0.08rem]'>
              Plan 1
            </div>
            <div className='w-full h-[150px] flex justify-center items-center'>
              <div className='text-base font-semibold text-[#000] mx-1'>$</div>
              <div className='text-xl font-semibold text-[#000]'>200</div>
              <div className='text-base font-semibold text-[#000]'>.88</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
page.displayName = "page"
export default page