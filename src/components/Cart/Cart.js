import React from 'react';

const Cart = (props) => {
    const {img, name} = props.item;
    return (
        <div>
            <div className='cart-item'>
                <img className='cart-img' src={img} alt="" />
                <p >{name}</p>
            </div>
        </div>
    );
};

export default Cart;