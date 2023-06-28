import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductCard.css"
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { useState } from "react";



export default function ProductCard({product, productId, showDescription, handleAddItemToCart, handleRemoveItemToCart, getQuantity}) {
    return (
        <div className="product-card">
            <div className="media">
            <Link to={`/products/${productId}`}>
        <img className="product-img" src={product.image} alt={`Image of ${product.name}`} />
        </Link>
      </div>
      <div className="product-details">
      <h4 className="product-name">{product.name}</h4>
        <p className="product-price">{`$${product.price.toFixed(2)}`}</p>
        {showDescription && (
          <p className="product-description">{product.description}</p>
        )}
        </div>

        <div className="buttons">
          <button className="add" onClick={() => handleAddItemToCart(product)}> {/* handleAddItemToCart(productId) */}
            +
          </button>
          <button className="remove" onClick={() => handleRemoveItemToCart(product)}>
            -
          </button>
          {getQuantity(product) > 0 && ( 
             <span className="product-quantity">{getQuantity(product)}</span> 
           )}
        </div>
                </div>


    )
  }
