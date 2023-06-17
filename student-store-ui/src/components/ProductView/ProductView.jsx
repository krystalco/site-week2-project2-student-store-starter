import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductView({ product, handleAddItemToCart, handleRemoveItemToCart }) {
  return (
    <div className = "product-view">
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
