import React from "react";
import "./Home.css";
import Typewriter from 'typewriter-effect';
import homeImg from "../../images/appimages/PortfolioIMG.png";

function Home() {
    return (
        <div className="home">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-6">
                        <img
                            src={homeImg}
                            id="home-img"
                            alt="homepageimg"
                        />
                    </div>
                    <div className="col-lg-6" id="home-text">
                        <h1>Hi, I'm Liz Mackle</h1>
                        <h4><Typewriter
                            options={{
                                strings: ['Welcome to my Portfolio!'],
                                autoStart: true,
                                loop: true,
                            }}
                        /></h4>
                        <p className="jobtitle">
                            Junior Full Stack Developer, Perth WA
                        </p>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
