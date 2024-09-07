import React, { useContext } from 'react'
import { TbShoppingBag } from 'react-icons/tb'
import { CartContext } from '../providers/CartProvider'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart } = useContext(CartContext)
    return (
        <Link to={'/cart'} className='relative mr-2'>
            <TbShoppingBag size={25} />
            <div className='rounded-full bg-black w-4 h-4 flex flex-col items-center justify-center absolute z-10 bottom-3 -right-1'><p className='text-xs text-white'>{cart.length}</p></div>
        </Link>
    )
}

export default Cart