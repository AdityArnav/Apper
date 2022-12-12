import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
        <nav className="container">
          <div className='navbar'>
            <img src='http://kalanidhithemes.com/live-preview/landing-page/apper/all-demo/01-app-landing-page-defoult/images/logo.png' alt="logo"/>
            <div className='nav-items'>
              <p>Home</p>
              <p>Features</p>
              <p>How it works</p>
              <p>Pages</p>
              <p>Pricing</p>
              <p>Blog</p>
              <p>Contact</p>
            <p className="icon_btn">GET STARTED</p>
            </div>
            <div class="toggle-wrap">
                <span class="toggle-bar"></span>
              </div>

          </div>
        </nav>
    </>
  )
}

export default Header;