import React, { useContext } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { MdClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { CartContext } from '../../providers/CartProvider'
import { calculateSellingPrice } from '../Card'

const ItemsOverview = () => {
    const { cart, removeItem, itemIncrement, itemDecrement, } = useContext(CartContext)
    return (
        <div className='w-full mt-4 mb-16'>
            <h3 className='text-[#1e1e1e] text-3xl font-semibold mb-10'>
                An overview of your order
            </h3>
            <div className='p-6 rounded-[12px] bg-[#FAFAFA] flex flex-col gap-6'>
                {
                    cart.length > 0 ? cart?.map((item, index) => <div key={index}>
                        <div className='flex w-full justify-between items-start'>
                            <div className='flex w-full gap-4'>
                                <div className='w-[72px] my-auto rounded-md h-[44px] flex items-center justify-center gap-1 border'>
                                    <button onClick={() => itemDecrement(item)} disabled={item.quantity < 2}><BiMinus /></button>
                                    <p>{item?.quantity}</p>
                                    <button onClick={() => itemIncrement(item)}><BiPlus /></button>
                                </div>
                                <div className='w-[88px] h-[88px] flex flex-col items-center rounded justify-center bg-[#DEDEDE]'>
                                    <img src={item.image} alt="product image" className='object-contain w-full h-full' />
                                </div>
                                <p className='text-base font-bold mt-1'>{item.title}</p>
                            </div>
                            <button onClick={() => removeItem(item)} className='opacity-50 hover:opacity-100'><MdClose size={25} /></button>
                        </div>
                        <p className='mt-2 text-xl font-semibold text-end'>
                            €{calculateSellingPrice(Number(item.price), Number(item.discount || '0')).toFixed(2)}
                        </p>
                        {cart.length - 1 !== index && <hr className='mt-6' />}
                    </div>) : <>
                        <p className='text-center'>No Items Found</p>
                        <Link className='text-center text-blue-500 hover:underline' to={'/products'}>Click here to add items.</Link>
                    </>
                }
            </div>
        </div>
    )
}

export default ItemsOverview