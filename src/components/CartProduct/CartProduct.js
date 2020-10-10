import React from 'react';
import './CartProduct.css'

function CartProduct({image, title, rating, price, id}) {
    return (
        <div className="cartProduct">
            <div className="cartProduct__image">
           <img 
            src={image} 
            alt={title}
            />
           </div>
           <div className="cartProduct__title">
               <h5>{title}</h5>
           </div>
           <div className="spacer"/>
           <div className="cartProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
           <div className="cartProduct__price">
               <p>${price}</p>
           </div>
           <button>Remove from Cart</button>
        </div>
    );
}

export default CartProduct;