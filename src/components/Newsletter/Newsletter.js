import React from 'react';

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="container">

                <div className="row">

                    <div className="col-md-6 p-0">
                        <div className="news-info">
                            <h3>Newsletter</h3>
                            <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                        </div>
                    </div>

                    <div className="col-md-6 p-0">
                        <div className="news-info m-t text-right">
                            <input type="email" placeholder="Your email" />
                            <button>subscribe</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Newsletter 