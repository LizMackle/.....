import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";

function MainLayout(props) {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
}

export default MainLayout;
