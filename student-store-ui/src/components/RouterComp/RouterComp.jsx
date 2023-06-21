import * as React from "react"
import { BrowserRouter, Route, Routes, Router, Link } from 'react-router-dom'
import App from "../App/App"
import ProductDetail from "../ProductDetail/ProductDetail"

export default function RouterComp() {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/products/:productId" element={<ProductDetail handleAddItemToCart={() => {}} handleRemoveItemToCart={() => {}} />} />
            {/* <Route path="/products/:productId" element={<h1>hi</h1>}  /> */}
        </Routes>
    </BrowserRouter>
       )
}