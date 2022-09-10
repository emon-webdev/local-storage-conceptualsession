import React, { useState } from 'react';
import './Product.css';
const Product = ({ product, handleAddToCart }) => {
    const [flipImage, setFlipImage] = useState(false);
    const { pairImage, name, price, sideImage } = product;

    return (
        <div className='product-card'
            onMouseEnter={() => setFlipImage(true)}
            onMouseLeave={() => setFlipImage(false)}
        >
            <img src={flipImage ? sideImage : pairImage} alt="" />
            <div className="product-info">
                <h3>Name: {name}</h3>
                <h3>Price: {price}</h3>
                <button onClick={() => handleAddToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;