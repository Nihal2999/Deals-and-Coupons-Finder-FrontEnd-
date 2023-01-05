import React from "react";
import './Header.css'

function Header() {
    return (
        <nav>
            <div class='header'>
                <h1><h1><b><font face="Showcard Gothic"><h1>DEALS AND COUPONS FINDER</h1></font></b></h1></h1>
                <div class="image">
                    <img src={require('./logo.png')} alt='cap' height={30} />
                </div>
            </div>
        </nav>
    )
}
export default Header;