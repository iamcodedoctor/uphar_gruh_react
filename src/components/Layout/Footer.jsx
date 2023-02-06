import React from "react";
import {Link} from "react-router-dom";
import "../../styles/Footer.css";
import {GrFacebook, GrInstagram, GrTwitter} from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="footer bg-light">
            <div className="heading_div">
                <h3>foodplaza</h3>
            </div>
            <div className="links_div">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/about">About Us</Link>
                <Link to="/#">Jobs</Link>
            </div>
            <div className="social_media">
                <a target={'blank'} href="https://www.instagram.com/">
                    <GrInstagram/>
                </a>
                <a target={'blank'} href="https://www.facebook.com/">
                    <GrFacebook/>
                </a>
                <a target={'blank'} href="https://www.twitter.com/">
                    <GrTwitter/>
                </a>
            </div>
            <div className="copyright_div">
                <p>Copyright © 2022 | All Rights reserverd</p>
            </div>
        </footer>
    );
};

export default Footer;
