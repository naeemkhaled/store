import React from 'react'
import '../../sass/homepage.css';

import week from '../images/deal_ofthe_week.png';

const Week = () => {

    let countDownData = new Date("Jan 5, 2021 15:37:25").getTime()

    let x = setInterval( () => {
        let now = new Date().getTime()

        let distance = countDownData -now;

        let days = Math.floor(distance / (28000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days + " Day";
        document.getElementById("hours").innerHTML = hours + " Hours ";
        document.getElementById("minutes").innerHTML = minutes + " Mins";
        document.getElementById("seconds").innerHTML = seconds + " Sec";
        
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
            document.getElementById("hours").innerHTML = "EXPIRED";
            document.getElementById("minutes").innerHTML = "EXPIRED";
            document.getElementById("seconds").innerHTML = "EXPIRED";
        }
    }, 1000)

    return (
        <div className="week">
            <div className="container">
                <div className="row">
                    <img src={week} />
                    <div className="week-time">
                        <h2 className="week-title"> deal of the week </h2>

                        <span id="days" className="time"></span>
                        <span id="hours" className="time"></span>
                        <span id="minutes" className="time"></span>
                        <span id="seconds" className="time"></span>

                        <button className="week-btn">shop now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Week