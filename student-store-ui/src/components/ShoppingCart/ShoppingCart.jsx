import * as React from "react"
import "./ShoppingCart.css"
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar"



export default function ShoppingCart({handleOpenSidebar, shoppingCart, totalPrice, handleCheckOut, checkOutIsPressed}) {
    const [sidebar, closeSidebar] = useState(true);
    const [prevCart, setPrevCart] = useState(shoppingCart)
    const [prevTotalPrice, setPrevTotalPrice] = useState(0)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

   
    const handleCloseSidebar = (sidebar) => {
        handleOpenSidebar()
        closeSidebar(false)
    }
    
    const handleCheckOutAndStore = () => {
      setPrevCart(shoppingCart)
      setPrevTotalPrice(totalPrice)
      handleCheckOut()
    }

    return (
        <section class= {`sidebar open ${sidebar ? "yes": "no"}`}>
   <div class="wrapper">
      <button onClick={handleCloseSidebar} class="toggle-button button open"><i class="material-icons md-48">arrow_forward</i></button>
      <div class="shopping-cart" >
         <div class="open">
            <h3 class="seee">Shopping Cart <span class="button"><i class="material-icons md-48">add_shopping_cart</i></span></h3>
            <div class="CartTable">
            {shoppingCart.length == 0 && <p>There is nothing in your shopping cart. Start shopping now!</p>}
            {shoppingCart.length > 0 && 
   <div class="header">
      <div class="header-row"><span class="flex-2">Name</span><span class="center">Quantity</span><span class="center">Unit Price</span><span class="center">Cost</span></div>
   
      {shoppingCart.map((item) => (
                <div className="product-row" key={item.itemId}>
                  <span className="flex-2 cart-product-name">{item.itemName}</span>
                  <span className="center cart-product-quantity">{item.quantity}</span>
                  <span className="center cart-product-price">{`$${item.unitPrice}`}</span>
                  <span className="center cart-product-subtotal">{`$${(item.cost).toFixed(2)}`}</span>
                </div>
              ))}


   
   <div class="receipt">
      <div class="receipt-subtotal"><span class="label">Subtotal</span><span></span><span></span><span class="center subtotal">{`$${totalPrice.toFixed(2)}`}</span></div>
      <div class="receipt-taxes"><span class="label">Taxes and Fees</span><span></span><span></span><span class="center">{`$${(totalPrice * .07).toFixed(2)}`}</span></div>
      <div class="receipt-total"><span class="label">Total</span><span></span><span></span><span class="center total-price">{`$${(totalPrice + (totalPrice * .07)).toFixed(2)}`}</span></div>
   </div>
   </div>
            }
</div>
   
            <div class="checkout-form">
               <h3 class="">Payment Info <span class="button"><i class="material-icons md-48">monetization_on</i></span></h3>
               <div class="input-field">
                  <label class="label">Name</label>
                  <div class="control"><input name="name" class="checkout-form-input" type="text" placeholder="Student Name" onChange = {(e) => setName(e.target.value)}/></div>
               </div>
               <div class="input-field">
                  <label class="label">Email</label>
                  <div class="control"><input name="email" class="checkout-form-input" type="email" placeholder="student@codepath.org" onChange = {(e) => setEmail(e.target.value)}/></div>
               </div>
               <div class="field">
                  <div class="control"><label class="checkbox"><input name="termsAndConditions" type="checkbox"/><span class="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a></span></label></div>
               </div>
               <div class="field">
                  <div class="control"><button class="button checkout-button" onClick={handleCheckOutAndStore}>Checkout</button></div>
               </div>
            </div>
            <div class="checkout-success">
               <h3>Checkout Info To Check Out 😉 <span class="icon button"><i class="material-icons md-48">fact_check</i></span></h3>
                <div class="content">
                  {!checkOutIsPressed &&
                  <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the
                     order, it will be delivered to your dorm room.
                  </p>}
                  {checkOutIsPressed &&
                 
                  <p> {`Thank you for shopping with us, ${name}! View your reciept below. We will also send it to ${email}.`}
                  <p>{`Transaction ID: ${Math.ceil(Math.random() * (10000000-100))}`}</p>
                  {prevCart.map((item) => (
  <div className="header-row" key={item.itemId}>
    <span className="flex-2 cart-product-name">{`${item.quantity} total of ${item.itemName} purchased at a cost of $${item.unitPrice.toFixed(2)} for a total cost of $${(item.cost).toFixed(2)}`}</span>
   
  </div>
))}
<h1 className="flex-2 cart-product-name">Subtotal: {`$${prevTotalPrice.toFixed(2)}`} </h1>
<h1>Taxes: {`$${(prevTotalPrice * .07).toFixed(2)}`} </h1>
<h2>{`Total Cost: $${(prevTotalPrice + (prevTotalPrice * .07)).toFixed(2)}`}</h2>
              </p> }
               </div>  
               <button class="button-success" onClick={handleCloseSidebar}>Shop More</button>
            </div>
         </div>
      </div>
   </div>
   {!sidebar && <Sidebar/>}
</section>
    )
}



//UNUSED CODE FOR MAKING RECIEPT
