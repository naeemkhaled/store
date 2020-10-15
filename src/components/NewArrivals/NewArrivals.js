import React, { useState } from 'react';
import '../../sass/homepage.css';

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

const NewArrivals = () => {
    const allProducts = [
        {
            desc: "Fujifilm X100T 16 MP Digital Camera (Silver)",
            price: "$520.00",
            discount: "$590.00",
            image: product1,
            tags: ["all", "men's"]
        },
        {
            desc: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
            price: "$600.00",
            discount: "",
            image: product2,
            tags: ["all", "women's"]
        },
        {
            desc: "Blue Yeti USB Microphone Blackout Edition",
            price: "$120.00",
            discount: "",
            image: product3,
            tags: ["all", "women's"]
        },
        {
            desc: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
            price: "$410.00",
            discount: "",
            image: product4,
            tags: ["all", "accessories"]
        },
        {
            desc: "Pryma Headphones, Rose Gold & Grey",
            price: "$180.00",
            discount: "",
            image: product5,
            tags: ["all", "women's", "men's"]
        },

        {
            desc: "Fujifilm X100T 16 MP Digital Camera (Silver)",
            price: "$520.00",
            discount: "$590.00",
            image: product6,
            tags: ["all", "accessories"]
        },
        {
            desc: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
            price: "$600.00",
            discount: "",
            image: product7,
            tags: ["all", "women's"]
        },
        {
            desc: "Blue Yeti USB Microphone Blackout Edition",
            price: "$120.00",
            discount: "",
            image: product8,
            tags: ["all", "accessories"]
        },
        {
            desc: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
            price: "$410.00",
            discount: "",
            image: product9,
            tags: ["all", "men's"]
        },
        {
            desc: "Pryma Headphones, Rose Gold & Grey",
            price: "$180.00",
            discount: "",
            image: product10,
            tags: ["all", "men's"]
        }


    ]
    const [products, setProducts] = useState(allProducts)

    const handleClick = (e, filterBy) => {
        document.querySelectorAll(".arrivals-grid-sorting li").forEach(li => {
            li.classList.remove("active")
        })
        e.target.classList.add("active")
        setProducts(allProducts.filter(product =>  product.tags.includes(filterBy)))
    }
    return (
        <div className="new-arrivals">
            <div className="container">
                <div className="col">
                    <div className="new-arrivals-title text-center">
                        <h2> New Arrivals </h2>
                    </div> {/* new-arrivals-title */}
                </div> {/* col */}
                <div className="row align-items-center pt-5">
                    <div className="col text-center">
                        <div className="new-arrivals-sorting">
                            <ul className="arrivals-grid-sorting">
                                <li className="active" onClick={(e) => { handleClick(e, "all") }}>
                                    all
                                </li>
                                <li onClick={(e) => { handleClick(e, "women's") }}>
                                    women's
                                </li>
                                <li onClick={(e) => { handleClick(e, "accessories") }}>
                                    accessories
                                </li>
                                <li onClick={(e) => { handleClick(e, "men's") }}>
                                    men's
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {products.map((product, index) =>
                        (
                            <div key={index} className="product">
                                <i className="product-icon fa fa-heart"></i>
                                <i class="product-icon fa fa-share"></i>
                                <img src={product.image} />
                                <p className="product-decs text-center">{product.desc}</p>
                                <h6 className="product-price text-center">{product.price} <span>{product.discount}</span></h6>
                                <a href="#" className="product-btn">add to cart</a>
                            </div>)
                    )}



                </div>

            </div> {/* container */}
        </div>
    )
}

export default NewArrivals
