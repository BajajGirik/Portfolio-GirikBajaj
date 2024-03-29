import React from 'react'
import './Header.css'
import { Link } from "react-scroll";

function Header() {
    return (
        <div className="Header" id="Head">
            <span className="Header__first">Hello!</span>
            <span className="Header__about">I am Girik Bajaj</span>
            <div>
                <p>Scroll down to know more about me</p>
                <Link className="icon solid fa fa-angle-double-down"
                    to="Skills"
                    smooth={true}
                    offset={-56}
                    duration={1000}>
                </Link>
            </div>
        </div>
    )
}

export default Header
