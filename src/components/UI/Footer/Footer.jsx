import React from 'react';
import { NavLink } from 'react-router-dom';
import fb from "../../../assets/images/footer/fb.png";
import twitter from "../../../assets/images/footer/twitter.png";
import youtube from "../../../assets/images/footer/youtube.png";
import classesCss from './footer.module.css';


const Footer = (props) => (
    <>
        <footer className="bg-success">
            <div className="text-white text-center">ZooReact - tous droits réservés</div>
            <div className="row no-gutters align-items-center text-center pt-2">
                <div className="col-3">
                    <a href="www.facebook.com" className="d-block" target="_blank">
                        <img src={fb} alt="facebook" className="imgFooter"/>
                    </a>
                </div>
                <div className="col-3">
                    <a href="www.twitter.com" className="d-block" target="_blank">
                        <img src={twitter} alt="twitter" className="imgFooter"/>
                    </a>
                </div>
                <div className="col-3">
                    <a href="www.youtube.com" className="d-block" target="_blank">
                        <img src={youtube} alt="youtube" className="imgFooterYoutube"/>
                    </a>
                </div>
                <div className="col-3">
                    <NavLink to="/mentionslegales" className={["nav-link", "p-0", "m-0", classesCss.p_footerLink].join(' ')}>Mentions légales</NavLink>
                    <a href="mailto:contact@zooreact.com" className={["nav-link", "p-0", "m-0", classesCss.p_footerLink].join(' ')}>contact@zooreact.com</a>
                </div>
            </div>
        </footer>
    </>
)

export default Footer;