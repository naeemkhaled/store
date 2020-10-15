import React from 'react';
import '../../sass/homepage.css'


const HeaderBar = () => {
    return (
        <div className="headerBar">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="top-nav-left text-left">
                            <p>FREE SHIPPING ON ALL U.S ORDERS OVER $50</p>
                        </div> {/* col */}
                    </div> {/* top_nav_left */}
                    <div className="col-6">
                        <div className="top-nav-right text-right">
                            <ul className="list-nav-right">
                                <li class="list-dropdown">
                                    <a class="list-link" href="#">
                                        USD <i class="fa fa-angle-down"></i>
                                    </a>
                                    <div class="list-dropdown-menu">
                                        <div class="link-drop">
                                        <a class="list-item" href="#">EGY</a>
                                        <a class="list-item" href="#">CAD</a>
                                        <a class="list-item" href="#">EUR</a>
                                        <a class="list-item" href="#">AUD</a>
                                        </div>
                                    </div>
                                </li> {/* list-dropdown */}
                                <li class="list-dropdown">
                                    <a class="list-link" href="#">
                                        English <i class="fa fa-angle-down"></i>
                                    </a>
                                    <div class="list-dropdown-menu en-dr">
                                        <div class="link-drop">
                                        <a class="list-item" href="#">Egypt</a>
                                        <a class="list-item" href="#">French</a>
                                        <a class="list-item" href="#">Italian</a>
                                        <a class="list-item" href="#">Spanish</a>
                                        </div>
                                    </div>
                                </li> {/* list-dropdown */}
                                <li class="list-dropdown">
                                    <a class="list-link" href="#">
                                        My Account  <i class="fa fa-angle-down"></i>
                                    </a>
                                    <div class="list-dropdown-menu ac-dr">
                                        <div class="link-drop">
                                        <a class="list-item" href="#"> <i class="fa fa-sign-in"></i> Sgin in</a>
                                        <a class="list-item" href="#"> <i class="fa fa-sign-out"></i> Logn in</a>
                                        <a class="list-item" href="#"><i class="fa fa-user-plus"></i> Register</a>
                                        <a class="list-item" href="#">Spanish</a>
                                        </div>
                                    </div>
                                </li> {/* list-dropdown */}
                            </ul> {/* list-nav-right */}
                        </div> {/* col */}
                    </div> {/* top_nav-right */}
                </div> {/* row */}
            </div> {/* container */}
        </div>
    )
}

export default HeaderBar