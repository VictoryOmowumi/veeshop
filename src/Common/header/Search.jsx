import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../images/logo2.svg'


const Search = () => {
      window.addEventListener('scroll', function(){
        const search = document.querySelector('.search');
        search.classList.toggle('active', window.scrollY > 100);
    })

  return (
    <section className="search">
        <div className="container c_flex">
            <div className="logo width">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="search-box f_flex">
              <i className="fa fa-search"></i>
              <input type="text" placeholder='Search...' />
              <span>All Category</span>
            </div>
            <div className="icon f_flex width">
                <i className="fa fa-user icon_circle"></i>
                <div className="cart">
                  <Link to="/">
                    <i className="fa fa-shopping-bag icon_circle"></i>
                    <span>0</span>
                  </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search