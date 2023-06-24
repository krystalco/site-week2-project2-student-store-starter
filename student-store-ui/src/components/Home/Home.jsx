import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid";
import Hero from "/Users/kohuabunwa/ftl/week2/site-week2-project2-student-store-starter/student-store-ui/src/components/Hero/Hero.jsx"
import SubNavbar from "../SubNavbar/SubNavbar";
import { useState } from "react";
import About from "../About/About";
import Navbar from "../Navbar/Navbar";
import Footer from "/Users/kohuabunwa/ftl/week2/site-week2-project2-student-store-starter/student-store-ui/src/components/Footer/Footer.jsx"
import ContactUs from "../ContactUs/ContactUs";
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import ProductDetail from "../ProductDetail/ProductDetail";

 


export default function Home({products,handleCategoryFilter, setSelectedCategory, selectedCategory, handleSearch, searchTerm, filteredProducts, handleAddItemToCart, handleRemoveItemToCart, getQuantity}) {
  
  return (
    <div className="home">
          <Navbar />
    <Hero/>
    {/* MAKING SUBNAVBAR */}
    <nav className="sub-navbar">
            {/* <div className="content"> */}
                {/* <div className = "row"> */}
                    <div className="search-bar">
                        <input type="text" name="search" placeholder="Search" value={searchTerm} onChange={handleSearch}></input>
                    </div>
                <div className = "row">
                <button onClick={() => setSelectedCategory(false)}>All Categories</button>
                <button onClick={(event) => handleCategoryFilter(event, 'clothing')}>Clothing</button>
                <button onClick={(event) => handleCategoryFilter(event, 'food')}>Food</button>
                <button onClick={(event) => handleCategoryFilter(event, 'accessories')}>Accessories</button>
                <button onClick={(event) => handleCategoryFilter(event, 'tech')}>Tech</button>
                </div>
                {/* </div> */}
            {/* </div> */}
        </nav>
    <ProductGrid
      products = {searchTerm ? filteredProducts : (selectedCategory ? filteredProducts : products)}
      handleAddItemToCart = {handleAddItemToCart}
      handleRemoveItemToCart = {handleRemoveItemToCart}
      getQuantity = {getQuantity}
    />
    <About/>
    <ContactUs/>
    
<Footer/>
</div>
  )
}
