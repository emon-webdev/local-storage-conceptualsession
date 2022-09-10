import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import './Cart.css';
const Cart = ({ cart, products, handleDeleteItem, handleDeleteAllItem }) => {
    const [offer, setOffer] = useState(false);
    console.log(offer)

    
    const [freeProduct, setFreeProduct] = useState({});

    const handleOffer = () => {
        const randomNumber = Math.floor(Math.random() * products.length);
        const item = products[randomNumber];
        setFreeProduct(item)

    };

       useEffect(() => {
        if(cart.length > 0){
            setOffer(true)
        }else{
            setOffer(false)
        }
       }, [cart])
    

    return (
        <>
            <div className="cart-header">
                <h2>Orders Summary</h2>
                <button onClick={() => handleDeleteAllItem()}>
                    <AiFillDelete />
                </button>
            </div>
            <div className="cart">
                {
                    cart.map(singleCart =>
                        <div key={singleCart.id} className="cart-info">
                            <img src={singleCart.sideImage} alt="" />
                            <div className="cart-info-text">
                                <h3>Quantity: {singleCart.quantity}</h3>
                                <h3>Name: {singleCart.name} </h3>
                                <h3>Price: {singleCart.price}</h3>
                            </div>
                            <button onClick={() => handleDeleteItem()}>
                                <AiFillDelete />
                            </button>
                        </div>
                    )
                }
                <p>Buy one get one free</p>
                <button onClick={handleOffer} className='offer-btn' disabled={!offer}>Get one for me</button>
                {Object.keys(freeProduct)?.length > 0 && (
                    <div className="cart-info">
                        <img src={freeProduct.sideImage} alt="" />
                        <div className="cart-info-text">
                            <h3>Quantity: {freeProduct.quantity}</h3>
                            <h3>Name: {freeProduct.name} </h3>
                            <h3>Price: {freeProduct.price}</h3>
                        </div>
                        <button onClick={() => handleDeleteAllItem()}>
                            <AiFillDelete />
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;