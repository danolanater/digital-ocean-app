import React from 'react'

function Header() {

    function hamburgerClicked() {
        const hamburger = [...document.getElementsByClassName("bar")]
        const menu = document.getElementsByClassName("hamburger-selected")
        menu[0].classList.toggle("show")
        hamburger.forEach(bar => bar.classList.toggle("x"))
    }

    return (
        <header id="home">
            <div className="header">
                <h1><a href="#home">Apple Raffle</a></h1>
                <ul className="nav">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#winners">Winning Tickets</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
                <div onClick={hamburgerClicked} className="hamburger">
                    <div className="top bar"></div>
                    <div className="middle bar"></div>
                    <div className="bottom bar"></div>
                </div>
            </div>
            <div className="hamburger-selected">
                <a className="hamburger-item" href="#home" onClick={hamburgerClicked}>Home</a>
                <a className="hamburger-item" href="#winners" onClick={hamburgerClicked}>Winning Tickets</a>
                <a className="hamburger-item" href="#about" onClick={hamburgerClicked}>About</a>
            </div>
        <!-- google tracking code-->
                            <!-- Global site tag (gtag.js) - Google Analytics -->
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZGEFE6VX1P"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-ZGEFE6VX1P');
                </script>

        </header>
    )
}

export default Header
