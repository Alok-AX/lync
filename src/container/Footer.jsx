import React from 'react';
import footerbiglogo from '../assets/footer-big-logo.png';
import arrow from '../assets/white-arrow.svg';
import footerLogo from '../assets/footer-logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='footer_section'>
         <footer className='container'>
             <div className="footer_top_section">
                <img src={footerbiglogo} alt="footerbiglogo" className='big-footer' />
                <h2>Got a game idea ? <br />
                    Let's make it big together !!!
                </h2>
                <a href="#" class="hero_first_btn">Get started <img src={arrow} alt=""/></a>
             </div>

             <div className="row main_row">
                <div className="col-lg-3 col-md-6">
                    <div className="footer_box">
                        <img src={footerLogo} alt="footerLogo"  className='footerLogo'/>
                        <h6>A GameFi Infrastructure</h6>
                        <ul className='footer_social_icon'>
                            <li>
                                <a href="#"><FaLinkedin /></a>
                            </li>
                            <li>
                                <a href="#"><FaGithubAlt /></a>
                            </li>
                            <li>
                                <a href="#"><FaTwitter /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <div className="footer_box">
                        <div className="row">
                            <div className="col-sm-4 col-6">
                                <h6>Product</h6>
                                <a href="#" className='footer_link'>SDK’s</a>
                                <a href="#" className='footer_link'>Transfer API’s</a>
                                <a href="#" className='footer_link'>Token API’s</a>
                                <a href="#" className='footer_link'>NFT API’s</a>
                            </div>
                            <div className="col-sm-4 col-6">
                                <h6>Company</h6>
                                <a href="#" className='footer_link'>About us</a>
                                <a href="#" className='footer_link'>Press Kit</a>
                                <a href="#" className='footer_link'>Security</a>
                                <a href="#" className='footer_link'>Privacy Policy</a>
                            </div>
                            <div className="col-sm-4 col-6">
                                <h6>Contact</h6>
                                <a href="#" className='footer_link'>Email</a>
                                <a href="#" className='footer_link'>Discord</a>
                                <a href="#" className='footer_link'>Telegram</a>
                                <a href="#" className='footer_link'>Press</a>
                            </div>
                            <div className="col-sm-4 col-6 footermobile_menu">
                                <h6>Contact</h6>
                                <a href="#" className='footer_link'>Email</a>
                                <a href="#" className='footer_link'>Discord</a>
                                <a href="#" className='footer_link'>Telegram</a>
                                <a href="#" className='footer_link'>Press</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-5 col-10">
                    <div className="footer_box">
                        <h5>Supercharge your inbox</h5>
                        <h6 className='sign_up_footer'>Sign up for our newsletter</h6>

                        <form action="">
                            <input type="email" placeholder='enter you email address' />
                            <button type='submit'>Submit</button>
                        </form>

                    </div>
                </div>
             </div>

             <div className="footer_last_row">
                <p>2024 LYNC World · <a href="#">Terms of service</a></p>
             </div>
         </footer>
    </section>
  )
}

export default Footer