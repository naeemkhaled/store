import React from 'react';
import '../../sass/homepage.css';

const Sections = () => {
    return (
        <div className="sctions">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="banner_item item-img-one">
                            <div className="banner_category">
                                <a href="#">women's</a>
                            </div>
                        </div> {/* banner_item */}
                    </div> {/* col-4 */}
                    <div className="col-4">
                        <div className="banner_item item-img-tow">
                            <div className="banner_category">
                                <a href="#">accessoris's</a>
                            </div>
                        </div> {/* banner_item */}
                    </div> {/* col-4 */}
                    <div className="col-4">
                        <div className="banner_item item-img-three">
                            <div className="banner_category">
                                <a href="#">men's</a>
                            </div>
                        </div> {/* banner_item */}
                    </div> {/* col-4 */}
                </div> {/* row */}
            </div> {/* container */}
        </div>
    )
}

export default Sections