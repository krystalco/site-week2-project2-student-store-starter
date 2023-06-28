import * as React from "react"
import { BrowserRouter, Route, Routes, Router, Link } from 'react-router-dom'
import Navbar from "/Users/kohuabunwa/ftl/week2/site-week2-project2-student-store-starter/student-store-ui/src/components/Navbar/Navbar.jsx"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import axios from "axios"
import { useEffect, useState, useRef} from "react";
import { useParams } from "react-router-dom";
import SubNavbar from "../SubNavbar/SubNavbar";
import ProductGrid from "../ProductGrid/ProductGrid";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductView from "../ProductView/ProductView";
import About from "../About/About";


export default function App() {

  const [shoppingCart, setShoppingCart] = useState([]);
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [selectedCategory, setSelectedCategory] = useState(false);
  const totalPriceRef = useRef(0)
  const [checkOutIsPressed, setCheckOutIsPressed] = useState(false)

  // SHOPPING CART FUNCTIONS

  let item  = {
    itemId : 0,
    itemName : "",
    quantity : 0,
    unitPrice : 0,
    cost : 0
  }
  
  const handleCheckOut = () => { 
    //makes shopping cart empty and updates checkOut state and totalPrice when checkout button is pressed
    setCheckOutIsPressed(!checkOutIsPressed);
    setShoppingCart([])
    setTotalPrice(0)
  }

  const setTotalPrice = (newTotalPrice) => {
    //sets the total price when it is updated
    totalPriceRef.current = newTotalPrice;
  };

  const getQuantity = (product) => {
    //gets quantity of a given product
    if (shoppingCart.find((item) => item.itemId === product.id)) {
    let item = shoppingCart.find((item) => item.itemId === product.id)
    return item.quantity
    }
  }
  const handleAddItemToCart = (product) => {
    let item = shoppingCart.find((item) => item.itemId === product.id)
    //check if product is still in shopping cart.
    if (item) {
    //if it's already there, increase its quantity by 1.
      item.quantity++;
      item.cost = item.cost + item.unitPrice
      setShoppingCart[[...shoppingCart, item]]
      getQuantity(product)
      setTotalPrice(totalPriceRef.current + item.unitPrice)
    }
    else {
    //if not there add it to shopping cart and set its quantity to 1.
      const newItem = {
        itemId : product.id,
        itemName : product.name,
        quantity : 1,
        unitPrice : product.price,
        cost : product.price
      }
      setShoppingCart([...shoppingCart, newItem])
      getQuantity(product)
      setTotalPrice(totalPriceRef.current + newItem.unitPrice)
    }
    
    }
    const handleRemoveItemToCart = (product) => {
      let item = shoppingCart.find((item) => item.itemId === product.id)
      //check if product is still in shopping cart
      if (item) {
      //if it's already there, decrease its quantity by 1
        item.quantity--;
        item.cost = item.cost - item.unitPrice
        setShoppingCart[[...shoppingCart]]
        //if quantity is 0, remove the item form the cart
        if (item.quantity === 0) {
            const updatedCart = shoppingCart.filter(item => item.itemId !== product.id);
            setShoppingCart([...updatedCart]);
          };
          //update total price
          setTotalPrice(totalPriceRef.current - item.unitPrice)
        }
      }
  

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


    const handleCategoryFilter = (event, category) => {
      //filters products by category
      event.preventDefault();
      setSelectedCategory(category);
      setFilteredProducts(products.filter((product) => product.category === category));
    };


    const handleSearch = (event) => {
      //filters products by search
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
          <Sidebar shoppingCart = {shoppingCart} totalPrice = {totalPriceRef.current} handleCheckOut = {handleCheckOut} checkOutIsPressed = {checkOutIsPressed}/>
  </main>
  <Routes>
    <Route exact path = "/" element= {<Home 
          products = {products}
          handleCategoryFilter={handleCategoryFilter}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          handleSearch = {handleSearch}
          searchTerm = {searchTerm}
          filteredProducts={filteredProducts}
          handleAddItemToCart = {handleAddItemToCart}
          handleRemoveItemToCart = {handleRemoveItemToCart}
          getQuantity = {getQuantity}
          />} />
    <Route exact path="/products/:productId" element={<ProductDetail/>} />

  </Routes>
      </BrowserRouter>
      
    </div>
  )
}
