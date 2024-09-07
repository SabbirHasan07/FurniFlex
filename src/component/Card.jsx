import { Button } from 'flowbite-react'
import React, { useContext } from 'react'
import { BiCart } from 'react-icons/bi'
import { CartContext } from '../providers/CartProvider'
import { AuthContext } from '../providers/AuthProvider'
import { useNavigate } from 'react-router-dom'

export const calculateSellingPrice = (originalPrice, discountPercentage) => {
    const discountAmount = originalPrice * (discountPercentage / 100);
    const sellingPrice = originalPrice - discountAmount;
    return sellingPrice;
}

const Card = ({item}) => {
    const { addItem } = useContext(CartContext);
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div
            className="w-full overflow-hidden p-4 flex flex-col gap-2 bg-white rounded-lg shadow-md"
        >
            <div className='p-5 bg-[#F2F2F2] h-[236px] rounded overflow-hidden'>
                <img src={item.image} alt="product-image" className='w-full object-contain' />
            </div>
            <div className='flex flex-col gap-1'>
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {item.title}
            </h5>
            <div className='flex justify-between'>
                <h2 className='text-lg font-bold'>€{calculateSellingPrice(Number(item.price), Number(item.discount || '0'))}</h2>
                {
                    Number(item.price) !== calculateSellingPrice(Number(item.price), Number(item.discount || '0')) && <>
                    <h2 className='text-lg font-bold line-through text-[#ABABAB]'>€{item.price}</h2>
                    <h2 className='text-lg font-bold line-through text-[#B92E2E]'>{item.discount}% OFF</h2>
                    </>
                }
            </div>
            <p className="font-normal dark:text-gray-400 text-[#838383] text-sm line-clamp-2">
                {item.description}
            </p>
            </div>
            <Button color='dark' onClick={()=>{
                if(user?.email){
                    addItem(item)
                }else{
                    navigate('/login')
                }
            }}>
                <BiCart color='white' size={20} className='mr-2'/>
                Add to cart</Button>
        </div>
    )
}

export default Card