import React, { useContext, useEffect } from 'react'
import ItemsOverview from '../component/Cart/ItemsOverview'
import PricingSection from '../component/Cart/PricingSection'
import { AuthContext } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

const CartPage = () => {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext);
  useEffect(()=>{
    if(!user?.email){
      navigate('/')
    }
  },[user])
  if(!user?.email) return null
  return (
    <div className='flex w-full gap-20'>
        <div className='flex-1'><ItemsOverview /></div>
        <div className='w-[380px]'><PricingSection /></div>
    </div>
  )
}

export default CartPage