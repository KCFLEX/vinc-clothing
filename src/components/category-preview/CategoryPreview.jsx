import { Link } from 'react-router-dom';
import './CategoryPreview.styles.scss'
import React from 'react'
import ProductCard from '../product-card/ProductCard'

const CategoryPreview = ({ title, products }) => (
  <div className='category-preview-container'>
    <h2>
      <Link className='title' to={title}>
        {title.toUpperCase()}
        </Link>
    </h2>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);

export default CategoryPreview;