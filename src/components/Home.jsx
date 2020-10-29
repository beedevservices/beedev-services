import React from "react";
import { useHistory } from "react-router-dom";
import BeeDev from '../images/webdev.png';
import Questions from '../images/2.png';

function Home() {
    const history = useHistory();
    console.log("ml: home:", history);

    // const production = ['Updates are being made to the site over the next month.  Please be patient.'];

    // production.forEach((Production, index) => {
    //     alert(Production, index);
    // });

    return (
        <div className="main-wrapper">
            <h1>Let our Hive make a difference!!</h1>
            <div className="content">
                <div className="home-header">
                    <img src={BeeDev} alt="BeeDev Header" id="heading" />
                    <img src={Questions} alt="Questions" id="questions" />
                </div>
                <div>
                <h2 className="home-answer">
                    BeeDev Services has solutions!
                </h2>
                <p>
                    In nature a Bee Hive is created by the work of a colony of bees.  Thats how BeeDev Services works.  We want to work WITH YOU.  We take that hive mentality personally.  We may have the skills and the time to create websites, but you have ideas and know your business.  Together we can create, build, and update your website.
                </p>
                </div>
            </div>
        </div>
    );
}

export default Home;