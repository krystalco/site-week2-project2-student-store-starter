import * as React from "react"
import "./ProductDetail.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductView from "../ProductView/ProductView";
import ProductCard from "../ProductCard/ProductCard";
import { useState, useEffect } from "react";
import Home from "/Users/kohuabunwa/ftl/week2/site-week2-project2-student-store-starter/student-store-ui/src/components/Home/Home.jsx"


export default function ProductDetail ({handleAddItemToCart, handleRemoveItemToCart}) {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);


useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
      .then((response) => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);  
      });
  }, [productId]);

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="product-detail">
      <ProductView
        product={product}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}
      />
    </div>
  );
}