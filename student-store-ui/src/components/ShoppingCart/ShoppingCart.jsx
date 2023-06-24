import * as React from "react"
import "./ShoppingCart.css"
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar"

export default function ShoppingCart({handleOpenSidebar, shoppingCart, totalPrice, handleCheckOut, checkOutIsPressed}) {
    const [sidebar, closeSidebar] = useState(true);
   
    const handleCloseSidebar = (sidebar) => {
        handleOpenSidebar()
        closeSidebar(false)
    }

    return (
        <section class= {`sidebar open ${sidebar ? "yes": "no"}`}>
   <div class="wrapper">
      <button onClick={handleCloseSidebar} class="toggle-button button open"><i class="material-icons md-48">arrow_forward</i></button>
      <div class="shopping-cart">
         <div class="open">
            <h3 class="seee">Shopping Cart <span class="button"><i class="material-icons md-48">add_shopping_cart</i></span></h3>
            <div class="CartTable">
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
   </div>

   <div class="receipt">
      <div class="receipt-subtotal"><span class="label">Subtotal</span><span></span><span></span><span class="center subtotal">{`$${totalPrice.toFixed(2)}`}</span></div>
      <div class="receipt-taxes"><span class="label">Taxes and Fees</span><span></span><span></span><span class="center">{`$${(totalPrice * .07).toFixed(2)}`}</span></div>
      <div class="receipt-total"><span class="label">Total</span><span></span><span></span><span class="center total-price">{`$${(totalPrice + (totalPrice * .07)).toFixed(2)}`}</span></div>
   </div>

</div>
            <div class="checkout-form">
               <h3 class="">Payment Info <span class="button"><i class="material-icons md-48">monetization_on</i></span></h3>
               <div class="input-field">
                  <label class="label">Name</label>
                  <div class="control"><input name="name" class="checkout-form-input" type="text" placeholder="Student Name"/></div>
               </div>
               <div class="input-field">
                  <label class="label">Email</label>
                  <div class="control"><input name="email" class="checkout-form-input" type="email" placeholder="student@codepath.org"/></div>
               </div>
               <div class="field">
                  <div class="control"><label class="checkbox"><input name="termsAndConditions" type="checkbox"/><span class="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a></span></label></div>
               </div>
               <div class="field">
                  <div class="control"><button class="button checkout-button" onClick={handleCheckOut}>Checkout</button></div>
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
                  <p>Thanks! Your order is confirmed! 
                  </p>}
               </div>
            </div>
         </div>
      </div>
   </div>
   {!sidebar && <Sidebar/>}
</section>
    )
}



//UNUSED CODE FOR MAKING RECIEPT
{/* {shoppingCart.map((item) => (
      <div className="product-row" key={item.itemId}>
         <span className="flex-2 cart-product-name">{`${item.quantity} total of ${item.itemName} for a total cost of $${(totalPrice + (totalPrice * .07)).toFixed(2)}`}</span>
      </div>
      ))}
      <h1>{`Your total cost including taxes and fees is ${(totalPrice + (totalPrice * .07)).toFixed(2)}`}</h1> */}