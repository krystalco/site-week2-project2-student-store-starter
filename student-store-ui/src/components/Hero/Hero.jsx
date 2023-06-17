import "./Hero.css"
export default function Hero() {
    return (
    <div className = "hero">
        <div className = "content">
        <div className = "intro">
            <h1>Welcome!</h1>
            <h1>Find your merch!</h1>
            <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
        </div>
        <div className = "media">
            <img src = "/src/images/retail_commerce_buy_market_business_ecommerce_shopping_shop_store_icon_210766.png"
             alt="store icon" className = "store-icon"/>
        </div>
        </div>
    </div>
    )
} 