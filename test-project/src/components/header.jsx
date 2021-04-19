import React from "react"
import "../css/header.css"


const Header = () => {
    return (
        <header class="page-header">
            <nav>
                <a href="#" class="cta-home">
                    Home
                </a>
                <a href="page2" class="cta-page2">
                    Page 2
                </a>
            </nav>
        </header>
    )
}

export default Header;