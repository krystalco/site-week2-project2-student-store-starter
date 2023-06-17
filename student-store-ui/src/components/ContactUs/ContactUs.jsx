import * as React from "react"
import "./ContactUs.css"

export default function ContactUs() {
    return(
        <div className="contact">
            <div className = "content">
            <h1>Contact Us</h1>
                <div className="summary">
                    <ul className="info">
                        <li>
                            <span className = "label">
                                Email:
                            </span>
                            <span className = "label"> code@path.org</span>
                        </li>
                        <li>
                            <span className="label">
                                Address:
                            </span>
                            <span className = "label"> 5214F Diamond Hts Blvd, Unit #1154, San Francisco, CA 94131</span>
                        </li>
                    </ul>
                    {/* <div className="media">
                        <img src="/src/images/happy_person.517b658d.svg"></img>
                    </div> */}
                </div>
            </div>
        </div>

    )}
