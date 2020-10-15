import React from 'react';
import '../../sass/homepage.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#"><span className="brand-color">COLO</span>SHOP</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse nav-list" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">promotion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">pages</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contact</a>
                        </li>
                    </ul>
                    <div className="nav-icon">
                        <i className="fa fa-search"></i>
                        <i className="fa fa-user"></i>
                        <i className="fa fa-shopping-cart"></i>
                        <span className="nav-span">2</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar