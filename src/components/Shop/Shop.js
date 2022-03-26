import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Random from '../Random/Random';
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
        // console.log(product);
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
                    cart.map(item => <Cart key={item.id} item={item}></Cart>)
                    }
                </div>
                <div>
                    {
                    item.map(item => <Random key={item.id} item={item}></Random>)
                    }
                </div>
                <div>
                    
                </div>
                <button onClick={chooseOne} className='choose-btn'>Choose One For Me</button>
                <button className='choose-btn'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;