import React, { createContext, useState, useEffect, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from './AuthProvider';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const {user} = useContext(AuthContext);

    const addItem = (product) => {
        let userCart = JSON.parse(localStorage.getItem('demo-e-commerce-cart')) || [];
        if (userCart.find(item => item.id === product.id)) {
            return;
        }
        else {
            userCart.push({ ...product, quantity: 1 });
            setCart(userCart)
            localStorage.setItem('demo-e-commerce-cart', JSON.stringify(userCart));
        }
        toast.success(`${product?.title} added to cart.`)
    }

    const itemIncrement = (product) => {
        let userCart = JSON.parse(localStorage.getItem('demo-e-commerce-cart')) || [];
        const newCart = userCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
        setCart(newCart)
        localStorage.setItem('demo-e-commerce-cart', JSON.stringify(newCart));
    }

    const itemDecrement = (product) => {
        let userCart = JSON.parse(localStorage.getItem('demo-e-commerce-cart')) || [];
        const newCart = userCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity } : item);
        setCart(newCart)
        localStorage.setItem('demo-e-commerce-cart', JSON.stringify(newCart));
    }

    const removeItem = (product) => {
        let userCart = JSON.parse(localStorage.getItem('demo-e-commerce-cart')) || [];
        const newCart = userCart.filter(item => item.id !== product.id)
        setCart(newCart)
        toast.success(`${product?.title} removed from cart.`)
        localStorage.setItem('demo-e-commerce-cart', JSON.stringify(newCart));
    }

    useEffect(() => {
        const storedCart = localStorage.getItem('demo-e-commerce-cart');
        if (storedCart) {
            try {
                const existingCart = JSON.parse(storedCart);
                setCart(existingCart);
            } catch (error) {
                console.error("Error parsing stored user Cart:", error);
            }
        } else {
            setCart([]);
        }
    }, [user?.email]);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, itemIncrement, itemDecrement }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };
