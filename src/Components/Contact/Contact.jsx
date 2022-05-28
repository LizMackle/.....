import React, { useRef } from 'react';
import { useState } from 'react';
import "./Contact.css";
import LMCV from "../Contact/EMackleCV.pdf";
import contacttitle from "../../images/appimages/Contacttitle.png";
import emailjs from '@emailjs/browser';
import { FaGithubSquare } from 'react-icons/fa';
import { BsFileEarmarkPdfFill } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function Contact() {
    const form = useRef();
    const [sent, messageSent] = useState(false);
    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_z8wu0lk', 'template_a3vp6pc', form.current, '6S-VQZjpXbwvD9vHr')
            .then((result) => {
                console.log(result.text);
                messageSent(true);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="container">
            <div className="pt-5">
                <img
                    src={contacttitle}
                    alt="contacttitle"
                />
            </div>

            <div className="pt-5 row">
                <div className="col-sm-4">
                    <h3>Get in touch</h3>
                    <h6 className="contact-links"><p><b>Email:</b> <a href="mailto:liz.mackle@outlook.com"> liz.mackle@outlook.com</a></p>
                        <p><b>Phone:</b> <a href="tel:0426239870">0426 239 870</a></p></h6>
                    <p><a href={LMCV} download><BsFileEarmarkPdfFill id="cvicon" size="2.75rem" color="#292b2c" /></a>
                        <a href="https://github.com/LizMackle"><FaGithubSquare id="githubicon" size="3.2rem" color="#292b2c" /></a>
                        <a href="https://www.linkedin.com/in/liz-mackle/"><BsLinkedin id="linkedinicon" size="2.8rem" color="#292b2c" /></a></p>
                </div>

                <div className="contactForm col-sm-8">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="row pb-3">
                            <div className="col-xs-6 col-md-6 form-group">
                                <input className="form-control rounded-0" id="name" name="from_name" placeholder="Name" type="text" autofocus style={{
                                    height: "50px"
                                }} required />
                            </div>
                            <div className="col-xs-6 col-md-6 form-group">
                                <input className="form-control rounded-0" id="email" name="from_email" placeholder="Email" type="email" style={{
                                    height: "50px"
                                }} required />
                            </div>
                        </div>
                        <textarea className="form-control rounded-0" id="message" name="message" placeholder="Message" rows="7" style={{
                            padding: "10px"
                        }} required ></textarea>

                        <div className="row">
                            <div className="col-xs-12 col-md-12 form-group">
                                <button className="btn-lg btn-block btn-dark rounded-0" type="submit">Submit</button><br></br>
                                {sent && "Thank you for contacting me, I will be in touch soon!"}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
