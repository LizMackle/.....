import React from "react";
import "./About.css";
import aboutmeimg from "../../images/appimages/artlarge.jpg";
import aboutmetitle from "../../images/appimages/Abouttitle.jpg";

function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row align-items-center my-10">
                    <div className="col-lg-6">
                        <div>
                            <img
                                src={aboutmetitle}
                                id="about-title"
                                alt="Aboutmetitle"
                            />
                        </div>
                        <p>
                            A fresh Full Stack Web Developer graduate located in Perth, WA.
                        </p>
                        <p>I'm a competent and enthusiatic individual with a goal to make a positive impact on future clients using the
                            skills I have learnt throughout the UWA Bootcamp course to create compelling and attractive websites.</p>
                        <p>I have always had a passion for the creative side of Web Devlopement and how it all comes together and
                            I look forward to being able to utilise my knowledge and skills to bring others visions to life!</p>
                    </div>
                    <div className="pt-4 col-lg-6">
                        <img
                            className="img-fluid"
                            src={aboutmeimg}
                            alt="AboutmeImg"
                        />
                    </div>
                </div>
            </div>
        </div >

    );
}

export default About;
