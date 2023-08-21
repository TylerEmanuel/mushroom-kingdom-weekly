import React, { useState } from "react"
import { Link } from "react-router-dom"


function Navbar() {
    // eslint-disable-next-line no-unused-vars
    const [activeLinkId, setActiveLinkId] = useState("link-home")

    function toggleNavDropdown() {
        const navDropdown = document.getElementById('nav-dropdown')
        navDropdown.classList.toggle('navbar__dropdown--active')
    }
    
    function hideNavDropdown() {
        const navDropdown = document.getElementById('nav-dropdown')
        navDropdown.classList.remove('navbar__dropdown--active')
    }
    
    function handleNavLink(e) {
        const newLinkId = e.target.id
        setActiveLinkId(prevLinkId => {
            const prevLink = document.getElementById(prevLinkId)
            const newLink = document.getElementById(newLinkId)
            prevLink.classList.remove('navbar__text--active')
            newLink.classList.add('navbar__text--active')
            return newLinkId
        })
        hideNavDropdown()
    }

    function handleBlur(e) {
        if (!e.currentTarget.contains(e.relatedTarget)) {
            hideNavDropdown()
        }
    }

    return (
        <div className="bricks-bg">
            <nav className="navbar">
                <Link id="link-home" onClick={handleNavLink} className="navbar__item navbar__text" to="/">Home</Link>
                <div onMouseLeave={hideNavDropdown} onBlur={handleBlur} id="nav-dropdown" className="navbar__dropdown">
                    <button onClick={toggleNavDropdown} className="navbar__btn navbar__text">Categories</button>
                    <div className="navbar__list">
                        <Link id="link-local" onClick={handleNavLink} className="navbar__item navbar__text" to="/articles/local">Local</Link>
                        <Link id="link-world" onClick={handleNavLink} className="navbar__item navbar__text" to="/articles/world">World</Link>
                        <Link id="link-sports" onClick={handleNavLink} className="navbar__item navbar__text" to="/articles/sports">Sports</Link>
                        <Link id="link-politics" onClick={handleNavLink} className="navbar__item navbar__text" to="/articles/politics">Politics</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar