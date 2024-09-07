import React, { useContext } from 'react'
import { CartContext } from '../../providers/CartProvider';
import { CiCircleInfo } from 'react-icons/ci';

const PricingSection = () => {

    const {cart} = useContext(CartContext)

    const calculateSubtotal = (Products) => {
        return Products.reduce((subtotal, item) => {
            const totalPrice = Number(item.price) * Number(item.quantity)
            const discountAmount = (totalPrice * Number(item.discount)) / 100;
            const priceAfterDiscount = totalPrice - discountAmount;
            return subtotal + priceAfterDiscount;
        }, 0);
    };

    const shipping = 0;
    const tax = 0;

    return (
        <div className='w-full mt-4 mb-16'>
            <h3 className='text-[#1e1e1e] text-3xl font-semibold mb-10'>
                Order Details
            </h3>
            <div className='p-6 rounded-[12px] bg-[#FAFAFA] flex flex-col gap-2 border'>
                <div className='flex justify-between'>
                    <p className='text-xl text-[#656565]'>Subtotal</p>
                    <p className='text-xl text-[#656565] font-medium'>€{calculateSubtotal(cart).toFixed(2)}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-xl text-[#656565]'>Shipping</p>
                    <p className='text-xl text-[#656565] font-medium'>{shipping > 0 ? shipping : 'Free'}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-xl text-[#656565] flex gap-1'>Estimated Tax <span><CiCircleInfo size={16}/></span></p>
                    <p className='text-xl text-[#656565] font-medium'>€ - {tax > 0 && tax}</p>
                </div>
                <hr className='mt-2 mb-4'/>
                <div className='flex justify-between'>
                    <p className='text-2xl font-semibold text-[#656565]'>Shipping</p>
                    <p className='text-2xl font-semibold text-[#0E0E0E]'>€{(calculateSubtotal(cart) + shipping + tax).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default PricingSection