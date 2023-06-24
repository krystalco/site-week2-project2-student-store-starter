import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductGrid({products=[], handleAddItemToCart, handleRemoveItemToCart, getQuantity}) {
    return (
        <div className="product-grid">
            {/* <div className="content"> */}
                <h3>Best Selling Products</h3>
                <div className = "grid">
                {products?.map((product) => ( <ProductCard
                    key = {product.name}
                    product = {product}
                    productId={product.id}
                    showDescription={false}
                    handleAddItemToCart = {handleAddItemToCart}
                    handleRemoveItemToCart = {handleRemoveItemToCart}
                    getQuantity = {getQuantity}
                /> ))}
                </div>
            {/* </div> */}
            
        </div>
    )
}