import React from "react"
import Navbar from "./Navbar"

function Header() {
    return (
        <header className="container">
            <div className="site-title-container smb-bg">
                <h1 className="site-title">Mushroom Kingdom Weekly</h1>
            </div>
            <Navbar />
        </header>
    )
}

export default Header