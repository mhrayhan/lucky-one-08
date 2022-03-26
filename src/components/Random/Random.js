import React from 'react';

const Random = (props) => {
    console.log(props);
    const {img, name} = props.item;
    return (
        <div>
            <h5>Select For You</h5>
            <div className='cart-item , select-cart'>
            <img className='cart-img' src={img} alt="" />
            <p >{name}</p>
            </div>
        </div>
    );
};

export default Random;