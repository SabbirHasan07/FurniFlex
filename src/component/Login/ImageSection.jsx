import React from 'react'

const ImageSection = () => {
  return (
    <div className="flex-1 h-screen relative">
        <img src='../../../chair.png' className='h-full w-full brightness-50' />
        <div className='h-screen left-0 top-0 right-0 absolute z-10'>
          <div className='h-full w-full flex flex-col items-center justify-center max-w-[445px] p-5 mx-auto'>
            <img src="../../../icon.png" className="h-20" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-[40px] font-bold text-white">Furni<span className="text-[#1E99F5]">Flex</span></span>
            <p className='text-center font-medium text-sm text-[#C8C4C4]'>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
          </div>
        </div>
      </div>
  )
}

export default ImageSection