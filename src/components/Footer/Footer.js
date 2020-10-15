import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                
                <div className="row">

                    <div className="col-md-6 p-0">
                        <ul>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                            <li>
                                <a href="#">Contact us</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 p-0">
                        <div className="footer-icon text-right">
                            <a href="#">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-skype"></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-pinterest"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="footer-copy">
                        <p> ©2020 All Rights Reserverd. This template is made with <i className="fa fa-heart-o"></i> by <span>Naeem</span> </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer