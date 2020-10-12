import React, { useEffect, useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import Product from '../Product/Product'
import './Products.css'

function Products(props) {

    const [{products}, dispatch] = useStateValue()

    const [category, setCategory] = useState("beauty")

    useEffect(() => {
        dispatch({
            type: 'SET_CATEGORY',
            category: category,
        })
    },[category])

    return (
        <div className="products">
            <div className="products__category">
                <h2>Browse products by category</h2>
                <select name="category" onChange={(e)=> setCategory(e.target.value)}>
                    <option value="beauty">Beauty</option>
                    <option value="bath">Bath</option>
                    <option value="euforia">Euforia</option>
                    <option value="games">Games</option>
                    <option value="lingerie">Lingerie</option>
                    <option value="lubricant">Lubricant</option>
                    <option value="vaginalHealth">Vaginal Health</option>
                </select>
            </div>
            <div className="products__items">

            {
                products?.map(item => (
                    <Product
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    image={item.img}
                    price={item.price}
                    rating={item.rating}
                    category={item.catagory}
                    qoh={item.QOH}
                    />
                    ))
                }
            </div>
        </div>
    );
}

export default Products;