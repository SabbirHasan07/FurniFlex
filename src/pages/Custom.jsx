import React, { useState } from 'react'
import ProductsSection from '../component/Home/ProductsSection';

const Custom = () => {
  const [active, setActive] = useState('rocking-chair');
  return (
    <div className='flex w-full overflow-hidden gap-[42px] py-10'>
        <div className='w-[263px] flex flex-col gap-3 pt-10 pr-8 border-r'>
            {['rocking-chair','side-chair', 'lounge-chair'].map((item,index)=><button onClick={()=>setActive(item)} key={index} className={`${active === item ? 'bg-[#0E0E0E] text-white' : 'bg-white text-[#717171]'}  rounded-[8px] w-[231px] px-6 py-3 text-left capitalize`}>{item.replace('-', ' ')}</button>)}
        </div>
        <ProductsSection category={active}/>
    </div>
  )
}

export default Custom