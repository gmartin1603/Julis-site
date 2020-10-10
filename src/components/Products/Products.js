import React from 'react';
import Product from '../Product/Product'
import './Products.css'

function Products(props) {
    return (
        <div className="products">
            <Product
            id="1"
            title="Coochy - Capri Dream"
            image="https://prd-s3.pureromance.com/prusa/catalogcontent/product/everything_catalogimage_7563_v637190113893834794.png"
            rating={5}
            price={22.50}
            />
            <Product
            id="2"
            title="Coochy - Love Story"
            image="https://prd-s3.pureromance.com/prusa/catalogcontent/product/everything_catalogimage_2038_v637164318166534983.png"
            rating={5}
            price={22.00}
            />
            <Product
            id="3"
            title="HēLi - Shower Gel & Bubble Bath - Lavender and Chamomile"
            image="https://prd-s3.pureromance.com/prusa/catalogcontent/product/everything_catalogimage_7535_v637292869837673602.png"
            rating={5}
            price={24.00}
            />
            <Product
            id="4"
            title="Body Dew - Blooms En Noir"
            image="https://prd-s3.pureromance.com/prusa/catalogcontent/product/everything_catalogimage_1029_v637321462070095436.png"
            rating={5}
            price={22.00}
            />
            <Product
            id="5"
            title="Euforia Shea Butter"
            image="https://prd-s3.pureromance.com/prusa/catalogcontent/product/everything_catalogimage_4_v637177036130921711.png"
            rating={5}
            price={49.00}
            />
            <Product
            id="6"
            title="Nourishing Body Lotion - Titan"
            image="https://prd-s3.pureromance.com/prusa/catalogcontent/product/everything_catalogimage_7731_v637336156396880837.png"
            rating={0}
            price={22.50}
            />
        </div>
    );
}

export default Products;