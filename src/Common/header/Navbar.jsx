import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(0)
  return (
    <>
        <header className='header'>
        <div className="container d_flex">
        <div className="categories d_flex">
            <span className='fa-solid fa-border-all'></span>
            <h4>Categories <i className="fa fa-chevron-down"></i> </h4>
        </div>

        <div className="navlink">
            <ul className={ mobileMenu ? "nav-links-mobilemenu" : "link f_flex capitalize" } onClick ={ () => setMobileMenu(false) }>
                <li> 
                    <Link to="/">Home</Link>    
                 </li>
                <li>
                    <Link to="/pages">Pages</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
                <li>
                    <Link to="/vendor">Vendors</Link>
                </li>
                <li>
                    <Link to="/track">Track Order</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <button className='toggle' onClick={() => setMobileMenu(!mobileMenu) } >
                { mobileMenu ? <i className="fas fa-times close home-btn"></i> : 
                <i className="fas fa-bars open home-btn"></i> }
            </button>
        </div>
        </div>
        </header>
    </>
  )
}

export default Navbar