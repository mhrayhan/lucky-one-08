import React from 'react';
import './Product.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    // console.log(props);
    const { name, img, price} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <p className='product-name'>Name: {name}</p>
                <p>Price: $ {price}</p> 
            </div>
            <button onClick={() => {props.addToCartBtn(props.product)}} className='cart-btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;