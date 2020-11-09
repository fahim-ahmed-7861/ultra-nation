import React from 'react';

const Cart = (props) => {

    let totalPopulation=0;

   
    //console.log(props.cart);

    const cart=props.cart;

    totalPopulation=cart.reduce((accumulator,item) => accumulator + item.population, 0);
    return (
        <div>
                <h3>Total population {totalPopulation}</h3>
        </div>
    );
};

export default Cart;