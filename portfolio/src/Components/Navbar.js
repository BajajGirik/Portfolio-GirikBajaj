import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
    
function Navbar() {
    const [bars, setbars] = useState(false);

    const openNav = (e) => {
        const nav = document.querySelector(".Navbar__container");
        if (bars) {
            nav.style.height = "0px";
            nav.style.fontSize = "0px";
            setbars(false);
        }
        else {
            nav.style.height = "auto";
            nav.style.fontSize = "1em";
            setbars(true);
        }


    }

    return (
        <div id = "TotalNav">
            <div className="Navbar">
                <div className="icon solid fa fa-bars" onClick={openNav}></div>
                <div><strong>GB</strong></div>
            </div>
            <div className="Navbar__container">    
                <Link className="Navbar__list"
                        to="Head"
                        smooth={true}
                        duration={1000}>
                    Home    
                    </Link> 
                <Link className="Navbar__list"
                        to="Skills"
                        smooth={true}
                        duration={1000}>
                    About Me   
                </Link> 
                <Link className="Navbar__list"
                    to="Main"
                    smooth={true}
                    duration={1000}>
                Projects    
                </Link> 
                <Link className="Navbar__list"
                    to="ContactMe"
                    smooth={true}
                    duration={1000}>
                    Contact  
                </Link>
            </div>
        </div>    
    )
}

export default Navbar
