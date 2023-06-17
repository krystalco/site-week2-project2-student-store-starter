import * as React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Logo from "/Users/kohuabunwa/ftl/week2/site-week2-project2-student-store-starter/student-store-ui/src/components/Logo/Logo.jsx"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
      <Logo/>
        <div className="socials">
          {/* will add later */}
        </div>
        <ul className="links">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/aboutus">About Us</Link>
          </li>
          <li>
          <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
          <Link to="/buynow">Buy Now</Link>
          </li>
        </ul>
        </div>
    </nav>
  )
}
