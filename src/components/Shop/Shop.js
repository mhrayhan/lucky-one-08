import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    const addToCartBtn = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart)
        console.log(newCart);
    }
    const chooseOne = (product) => {
        const cartItem = [...cart, product];
        
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                products.map(product => <Product
                    key={product.id} 
                    addToCartBtn={addToCartBtn}
                    product={product}
                    ></Product>)
            }
            </div>
            <div className='cart-container'>
                <h2 className='cart-heading'>Cart Item</h2>
                <div>
                    {
                    cart.map(item => (
                        <div className='cart-item'>
                            <img className='cart-img' src={item.img} alt="" />
                            <p >{item.name}</p>
                        </div>
                    ))
                    }
                </div>
                <button onClick={chooseOne} className='choose-btn'>Choose One For Me</button>
            </div>
        </div>
    );
};

export default Shop;