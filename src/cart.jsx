import React, { useState, useEffect } from 'react';
import './cart.css';

const Cart = () => {
    const name = localStorage.getItem('name');
    const [cart, setCart] = useState(null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch('http://localhost:3000/cart', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name: name }),
                });
                const data = await response.json();
                if (data.message) {
                    alert(data.message);
                } else {
                    setCart(data);
                }
            } catch (error) {
                console.error('Error fetching cart:', error);
                alert('Failed to fetch cart');
            }
        };

        fetchCart();
    }, [name]);  // Dependency array to ensure the effect runs when `name` changes

    return (
        <div>
            <h1 className='ptitle'>Purchased Games</h1>
            <p></p>
            {cart ? (
                 cart.cart.map((game, index) => (
                    <p key={index} className='pgames'>{game}</p>
                ))
            ) : (
                <p>Loading cart...</p> // Placeholder while the cart data is being fetched
            )}
        </div>
    );
};

export default Cart;
