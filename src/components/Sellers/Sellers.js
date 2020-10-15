import React from 'react';

import product1 from '../images/product_1.png';
import product2 from '../images/product_2.png';
import product3 from '../images/product_3.png';
import product4 from '../images/product_4.png';
import product5 from '../images/product_5.png';

import product6 from '../images/product_6.png';
import product7 from '../images/product_7.png';
import product8 from '../images/product_8.png';
import product9 from '../images/product_9.png';
import product10 from '../images/product_10.png';

const Sellers = () => {
    return (
        <div className="sellers">
            <div className="container">
                <div className="col">
                    <div className="sellers-title text-center">
                        <h2> Best Sellers </h2>
                    </div> {/* new-arrivals-title */}
                </div> {/* col */}

                <div className="row">
                        <div className="product">
                            <i className="product-icon fa fa-heart"></i>
                            <i class="product-icon fa fa-share"></i>
                            <img src={product1} />
                            <p className="product-decs text-center">Fujifilm X100T 16 MP Digital Camera (Silver)</p>
                            <h6 className="product-price text-center">$520.00 <span>$590.00</span></h6>
                        </div>
                        
                        <div className="product">
                            <i className="product-icon fa fa-heart"></i>
                            <i class="product-icon fa fa-share"></i>
                            <img src={product2} />
                            <p className="product-decs text-center">Samsung CF591 Series Curved 27-Inch FHD Monitor</p>
                            <h6 className="product-price text-center">$600.00</h6>
                        </div>

                        <div className="product">
                            <i className="product-icon fa fa-heart"></i>
                            <i class="product-icon fa fa-share"></i>
                            <img src={product3} />
                            <p className="product-decs text-center">Blue Yeti USB Microphone Blackout Edition</p>
                            <h6 className="product-price text-center">$120.00</h6>
                        </div>

                        <div className="product">
                            <i className="product-icon fa fa-heart"></i>
                            <i class="product-icon fa fa-share"></i>
                            <img src={product4} />
                            <p className="product-decs text-center">DYMO LabelWriter 450 Turbo Thermal Label Printer</p>
                            <h6 className="product-price text-center">$410.00</h6>
                        </div>

                        <div className="product">
                            <i className="product-icon fa fa-heart"></i>
                            <i class="product-icon fa fa-share"></i>
                            <img src={product5} />
                            <p className="product-decs text-center">Pryma Headphones, Rose Gold & Grey</p>
                            <h6 className="product-price text-center">$180.00</h6>
                        </div>

                </div>

            </div> {/* container */}
        </div>
    )
}

export default Sellers
