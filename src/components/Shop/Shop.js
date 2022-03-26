import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [item, setItem] = useState([]);
    useEffect( () => {
        fetch('product.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } , [])

    const addToCartBtn = (product) => {
        
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart)
        // console.log(newCart);
    }
    const chooseOne = () => {
        const items = [...cart];
        const randomItem = [Math.floor((Math.random() * items.length))]
        if(randomItem <= (items.length - 1)){
            let randomObj = [];
            randomObj.push(items[randomItem])
            setItem(randomObj);
            // console.log(randomObj);
        }
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
                <h2 className='cart-heading'>Selected Laptop</h2>
                <div>
                    {
                    cart.map(item => (
                        <div>
                            <div className='cart-item'>
                                <img className='cart-img' src={item.img} alt="" />
                                <p >{item.name}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
                {
                    item.map(item => (
                        
                   <div>
                       <h5>Select For You</h5>
                       <div className='cart-item , select-cart'>
                        <img className='cart-img' src={item.img} alt="" />
                        <p >{item.name}</p>
                    </div>
                   </div>
                    ))
                }
                <div>
                    
                </div>
                <button onClick={chooseOne} className='choose-btn'>Choose One For Me</button>
                <button className='choose-btn'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;