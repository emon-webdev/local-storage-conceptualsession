import React, { useEffect, useState } from 'react';
import { addToLocalStorage } from '../../utilities/localStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exist = cart.find(product => product.id == selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            
            selectedProduct.quantity = selectedProduct.quantity +1;
            newCart = [...rest, selectedProduct]
        }

        // localStorage 
        addToLocalStorage(selectedProduct.id)

        setCart(newCart)
    };

    
    const handleDeleteAllItem = () => {
        setCart([])
    };
    

    return (
        <div className="Shop-area">

            <div className="products-area">
                {
                    products.map(product =>
                        <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        />
                    )
                }
            </div>
            <div className="cart-area">
                <Cart
                    products={products}
                    cart={cart}
                    handleDeleteAllItem={handleDeleteAllItem}
                />
            </div>
        </div>
    );
};

export default Shop;