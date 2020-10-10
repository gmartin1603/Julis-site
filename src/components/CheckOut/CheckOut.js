import React from 'react';
import { useStateValue } from '../context/StateProvider';
import './CheckOut.css'

function CheckOut(props) {

    const [{cart}, dispatch] = useStateValue()

    return (
        <div className="checkOut">
            <div className="checkOut__info">
                <form 
                action=""
                className="checkOut__form"
                >
                    <h4>Name</h4>
                    <input type="text" placeholder="First"/>
                    <input type="text" placeholder="Last"/>
                    <h4>Address</h4>
                    <input type="text" placeholder="123 example ave"/>
                    <input type="text" placeholder="City"/>
                    <input type="text" placeholder="State"/>
                    <input type="text" placeholder="Zipcode"/>
                </form>
            </div>
            <div className="checkOut__products">
                {
                    cart.map(item => (
                        <div key={item.id} className="item">
                            <span>
                            <h5>{item.title} </h5>
                            <h6>
                                ${item.price}
                            </h6>
                            </span>
                            <button>Remove from Order</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CheckOut;