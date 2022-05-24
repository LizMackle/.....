import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    const navLinks = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About",
            link: "/about",
        },

        {
            title: "Projects",
            link: "/projects",
        },
        {
            title: "Contact",
            link: "/contact",
        },
    ];

    const [isMobile, setIsMobile] = useState(false);
    const [showListItems, setShowListItems] = useState(true)

    useEffect(() => {
        // check if we are in mobile
        const screenWidth = document.body.clientWidth;

        const screenIsMobile = screenWidth < 550;

        setIsMobile(screenIsMobile);
        if (screenIsMobile) {
            setShowListItems(false);
        }

    }, [])

    function toggleList() {
        setShowListItems(!showListItems);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            {isMobile && (
                <button onClick={toggleList} aria-label="Toggle navigation" className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
            )}
            {showListItems && (
                <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                    {navLinks.map((item) => {
                        return (
                            <li className="nav-item" key={item.link}>
                                <Link className="navList nav-link" to={item.link}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
}
