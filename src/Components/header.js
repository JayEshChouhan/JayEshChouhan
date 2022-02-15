import React, { useEffect , useState} from 'react';
import { Link,NavLink } from "react-router-dom";
export default function Header(prop){
    function logout() {
        localStorage.removeItem('UserData');
        localStorage.removeItem('UserAddress');
        localStorage.setItem('isUserAthanticated', false)
        window.location.href = '/login';
        prop.updateState(prop.isUserAthanticated)
    }
    return(
      <header className={prop.headerTheam}>
        <div className="header-top">
          <div className="header-left">
            <div className="header-dropdown">
                <a href="#">Usd</a>
                <div className="header-menu">
                    <ul>
                        <li><a href="#">Eur</a></li>
                        <li><a href="#">Usd</a></li>
                    </ul>
                </div>
            </div>
            <div className="header-dropdown">
                <a href="#">Eng</a>
                <div className="header-menu">
                    <ul>
                        <li><a href="#">English</a></li>
                        <li><a href="#">French</a></li>
                        <li><a href="#">Spanish</a></li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="header-right">
              <ul className="top-menu">
                  <li>
                      <a href="#">Links</a>
                      <ul>
                          <li><a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a></li>
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Contact Us</a></li>
                          <li>
                              {!prop.isUserAthanticated ? (
                                <Link to="/login"><i className="icon-user"></i>Login</Link>
                                ):(
                                  <div className="header-dropdown">
                                    <a href="#">Hi.. {prop.data.name}</a>
                                    <div className="header-menu">
                                        <ul>
                                            <li><a href='/my_account'>My Account</a></li>
                                            <li><a href='#' onClick={logout}>Logout</a></li>
                                        </ul>
                                    </div>
                                    </div>
                                )}
                            </li>
                      </ul>
                  </li>
              </ul>
          </div>
        </div>
        <div className="header-middle sticky-header">
            <div className="header-left">
                <button className="mobile-menu-toggler">
                    <span className="sr-only">Toggle mobile menu</span>
                    <i className="icon-bars"></i>
                </button>
                <NavLink exact to="/" className="logo">
                    <img src={prop.sideLogo || "images/logo.png"} alt="Molla Logo" width="110" height="25"></img>
                </NavLink>
            </div>

            <div className="header-center">
              <nav className="main-nav">
                    <ul className="menu sf-arrows">
                        <li>
                            <NavLink exact activeClassName="active" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/shop">Shop</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/products">Product</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/pages">Pages</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/elements">Elements</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="header-right">
                <div className="header-search">
                    <a href="#" className="search-toggle" role="button" title="Search"><i className="icon-search"></i></a>
                    <form action="#" method="get">
                        <div className="header-search-wrapper">
                            <label for="q" className="sr-only">Search</label>
                            <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required />
                        </div>
                    </form>
                </div>
                <div className="wishlist">
                    <a href="#" title="Wishlist">
                        <i className="icon-heart-o"></i>
                        <span className="wishlist-count">3</span>
                    </a>
                </div>

                <div className="dropdown cart-dropdown">
                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                        <i className="icon-shopping-cart"></i>
                        {/* { <span className="cart-count">{ prop }</span> } */}
                        <span className="cart-count">2</span>
                    </a>

                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-cart-products">
                            <div className="product">
                                <div className="product-cart-details">
                                    <h4 className="product-title">
                                        <a href="#">Beige knitted elastic runner shoes</a>
                                    </h4>

                                    <span className="cart-product-info">
                                        <span className="cart-product-qty">1</span>
                                        x $84.00
                                    </span>
                                </div>

                                <figure className="product-image-container">
                                    <a href="#" className="product-image">
                                        <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                                    </a>
                                </figure>
                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                            </div>

                            <div className="product">
                                <div className="product-cart-details">
                                    <h4 className="product-title">
                                        <a href="#">Blue utility pinafore denim dress</a>
                                    </h4>

                                    <span className="cart-product-info">
                                        <span className="cart-product-qty">1</span>
                                        x $76.00
                                    </span>
                                </div>

                                <figure className="product-image-container">
                                    <a href="#" className="product-image">
                                        <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                                    </a>
                                </figure>
                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                            </div>
                        </div>

                        <div className="dropdown-cart-total">
                            <span>Total</span>

                            <span className="cart-total-price">$160.00</span>
                        </div>

                        <div className="dropdown-cart-action">
                            <a href="#" className="btn btn-primary">View Cart</a>
                            <a href="#" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    );
}