import * as React from "react"
import "./SubNavbar.css"

export default function SubNavbar() {
    return (
        <nav class="sub-navbar">
            <div class="content">
                <div class = "row">
                    <div class="search-bar">
                        <input type="text" name="search" placeholder="Search" value={searchTerm} onChange={handleSearch}></input>
                    </div>
                <div class = "row">
                            <button>All Categories</button>
                            <button>Clothing</button>
                            <button>Accessories</button>
                            <button>Tech</button>
                </div>
                </div>
            </div>
        </nav>
    )
}