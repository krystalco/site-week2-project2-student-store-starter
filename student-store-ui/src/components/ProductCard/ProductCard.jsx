import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductCard.css"
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";


export default function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
    return (
        <div className="product-card">
            <div className="media">
            <Link to={`/products/${productId}`}>
        <img className="product-img" src={product.image} alt={`Image of ${product.name}`} />
        </Link>
      </div>
      <div className="product-details">
      <h4 className="product-name">{product.name}</h4>
        <p className="product-price">{product.price}</p>
        {showDescription && (
          <p className="product-description">{product.description}</p>
        )}
        </div>

        <div className="buttons">
          <button className="add" onClick={handleAddItemToCart(productId)}> {/* handleAddItemToCart(productId) */}
            Add
          </button>
          <button className="remove" onClick={handleRemoveItemToCart(productId)}>
            Remove
          </button>
          {quantity > 0 && (
            <span className="product-quantity">{quantity}</span>
          )}
        </div>
                </div>


    )
}
