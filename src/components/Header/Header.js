import React, { useState, useEffect } from "react"
import logo from "../../images/certsys-logo.png"
import './Header.css'
import '../../responsividade.css'
function Header () {

    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 30) {
                setScrolled(true)
                document.querySelector('.header')
                .classList.add('header-scrolled')

            } else {
                setScrolled(false)
                document.querySelector('.header')
                .classList.remove('header-scrolled')
            }
        }
        window.addEventListener('scroll', handleScroll)
    }
    , [])

    return (
        <header className="header" value={scrolled} >
            <nav className="navbar" >
                <a href="/#" >
                    <img src={logo} alt="CertSys Logo" />
                </a>
                <ul className="navbar-nav">
                    <li>
                        <a href="/#"> home </a>
                    </li>
                    <li>
                        <a href="/#"> quem somos </a>
                    </li>
                    <li>
                        <a href="/#"> o que fazemos </a>
                    </li>
                    <li>
                        <a href="/#"> insights </a>
                    </li>
                    <li>
                        <a href="/#"> carreiras </a>
                    </li>
                    <li>
                        <a href="/#"> contato </a>
                    </li>
                </ul>
                <div className="btn-mobile"></div>
            </nav>
        </header>
    )

}

export default Header