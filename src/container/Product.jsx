import React from 'react';
import ProductCard from '../components/Product/ProductCard';

const Product = () => {
  return (
    <section className='product_section'>
        <div className="container">
            <div className="product_head">
                <h2>Product <span>Suite</span></h2>
            </div>
            <div className="row">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    </section>
  )
}

export default Product