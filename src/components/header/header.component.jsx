import React from "react";
import NavbarHeader from "./navbar.component";
import './header.style.css'
const Header = () => {
    return (
        <div className="header">
            <div className="options">
                <NavbarHeader/>
            </div>
        </div>
    );
};

export default Header;