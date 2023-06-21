import * as React from "react"
import { BrowserRouter, Route, Routes, Router, Link } from 'react-router-dom'
import Navbar from "/Users/kohuabunwa/ftl/week2/site-week2-project2-student-store-starter/student-store-ui/src/components/Navbar/Navbar.jsx"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubNavbar from "../SubNavbar/SubNavbar";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductView from "../ProductView/ProductView";
import About from "../About/About";

const item = {
  itemId : null,
  quantity : null
}

export default function App() {
  const [products, setProducts] = useState([])
  const [shoppingCart, setShoppingCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState(false);
  

  useEffect(() => {
    axios
      .get("https://codepath-store-api.herokuapp.com/store")
      .then((response) => {
        setProducts(response.data.products);
    })     
    .catch((error) => {
      console.log(error);
    });
  }, []);

  const handleAddItemToCart = (productId) => {
    let item = shoppingCart.find((item) => item.itemId === productId)
    //check if product is still in shopping cart.
    if (item) {
    //if it's already there, increase its quantity by 1.
      item.quantity++;
    }
    else {
    //if it there add it to shopping cart and set its quantity to 1.
      const newItem = {
        itemId : productId,
        quantity : 1
      }
      setShoppingCart([...shoppingCart, newItem])
    }
    //add the price of the product to the total price of the shoppingCart [STRETCH]
    }
    const handleRemoveItemToCart = (productId) => {
      let item = shoppingCart.find((item) => item.itemId === productId)
      //check if product is still in shopping cart
      if (item) {
      //if it's already there, decrease its quantity by 1
        item.quantity--;
        //if quantity is 0, remove the item form the cart
        if (item.quantity === 0) {
          setShoppingCart(prevCart => {
            const updatedCart = prevCart.filter(item => item.itemId !== productId);
            return updatedCart;
          });
        }
      }
    }

    const handleCategoryFilter = (event, category) => {
      event.preventDefault();
      setSelectedCategory(category);
      setFilteredProducts(products.filter((product) => product.category === category));
      console.log(filteredProducts)
    };


    const handleSearch = (event) => {
      try {
      event.preventDefault();
      setSearchTerm(event.target.value);
      setFilteredProducts(
      products.filter((item) => item.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
      )
      } catch(error) {
        console.log(error)
      }
    };


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* <Sidebar /> */}
  </main>
  <Routes>
    <Route exact path = "/" element= {<Home 
          products = {products}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          handleCategoryFilter={handleCategoryFilter}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          handleSearch = {handleSearch}
          searchTerm = {searchTerm}
          filteredProducts={filteredProducts}
          />} />
    <Route exact path="/products/:productId" element={<ProductDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} />} />

  </Routes>
      </BrowserRouter>
      
    </div>
  )
}
