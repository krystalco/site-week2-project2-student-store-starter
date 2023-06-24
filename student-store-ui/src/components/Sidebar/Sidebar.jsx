import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import { useState } from "react";

export default function Sidebar({shoppingCart, totalPrice, handleCheckOut, checkOutIsPressed}) {
const [sidebar, openSidebar] = useState(false);

const handleOpenSidebar = () => {
  openSidebar((sidebar)=> !sidebar);
};
  return (
    <section className={`sidebar ${sidebar ? "open": "closed"}`}>
      <div class = "wrapper">
        <button onClick={handleOpenSidebar} class = "toggle-button button closed">
          <i class="material-icons md-48">arrow_forward</i>
        </button>
      <div class = "shopping-cart">
        <div class = "cart-icons">
          <span class = "cart-icon icon button">
            <i class="material-icons md-48">add_shopping_cart</i>
          </span>
          <span class="cart-icon icon button">
            <i class="material-icons md-48">monetization_on</i> 
          </span>
          <span class="cart-icon icon button">
            <i class="material-icons md-48">fact_check</i> 
          </span>
          </div>
      </div>
      </div>
      {sidebar && <ShoppingCart handleOpenSidebar = {handleOpenSidebar} shoppingCart= {shoppingCart} totalPrice = {totalPrice} handleCheckOut = {handleCheckOut} checkOutIsPressed = {checkOutIsPressed}
      />}
    </section>
  )
}
