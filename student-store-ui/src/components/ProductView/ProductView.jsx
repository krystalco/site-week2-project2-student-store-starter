import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Navbar from '../Navbar/Navbar';
export default function ProductView({ product, handleAddItemToCart, handleRemoveItemToCart }) {
  return (
    <div className = "product-view">
          <Navbar/>
          <ProductCard
                  product = {product}
                  productId={product.id}
                  quantity= {0}
                  handleAddItemToCart={() => handleAddItemToCart(product.id)}
                  handleRemoveItemToCart={() => handleRemoveItemToCart(product.id)}
                  showDescription={true}
              />
              </div>
  );
}
