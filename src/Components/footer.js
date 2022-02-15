import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer(prop) {
    return(
        <footer className="footer mt-3">
            <Container className="service">
                <Row>
                    <Col sm={6} lg={3}>
                        <div className="icon-box icon-box-side">
	                        <span className="icon-box-icon">
	                            <i className="icon-rocket"></i>
	                        </span>

	                        <div className="icon-box-content">
	                            <h3 className="icon-box-title">Free Shipping</h3>
	                            <p>Orders $50 or more</p>
	                        </div>
	                    </div>
                    </Col>
                    <Col sm={6} lg={3}>
                        <div className="icon-box icon-box-side">
	                        <span className="icon-box-icon">
	                            <i className="icon-rotate-left"></i>
	                        </span>

	                        <div className="icon-box-content">
	                            <h3 className="icon-box-title">Free Returns</h3>
	                            <p>Within 30 days</p>
	                        </div>
	                    </div>
                    </Col>
                    <Col sm={6} lg={3}>
                        <div className="icon-box icon-box-side">
	                        <span className="icon-box-icon">
	                            <i className="icon-info-circle"></i>
	                        </span>

	                        <div className="icon-box-content">
	                            <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
	                            <p>When you sign up</p>
	                        </div>
	                    </div>
                    </Col>
                    <Col sm={6} lg={3}>
                        <div className="icon-box icon-box-side">
	                        <span className="icon-box-icon">
	                            <i className="icon-life-ring"></i>
	                        </span>

	                        <div className="icon-box-content">
	                            <h3 className="icon-box-title">We Support</h3>
	                            <p>24/7 amazing services</p>
	                        </div>
	                    </div>
                    </Col>
                </Row>
            </Container>

            <div className="footer-middle">
                <Container>
            		<Row>
                        <Col lg={3} md={12}>
                            <div className="widget widget-about">
                            	<img src={prop.sideLogo || "images/logo.png"} className="footer-logo" alt="Footer Logo" width="110" height="25"/>
		                        <p>Praesent dapibus, neque id cursus ucibus, tortor  neque egestas augue, eu vulputate magna eros eu erat. </p>
		                        
		                        <div className="social-icons">
                                    <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                                    <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                                    <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                                    <a href="#" className="social-icon" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
                                    <a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                                </div>
		                    </div>
                        </Col>
                        <Col lg={3} md={12}>
                            <div className="widget">
		                        <h4 className="widget-title">useful links</h4>

		                        <ul className="widget-list">
		                            <li><a href="#">About Molla</a></li>
		                            <li><a href="#">How to shop on Molla</a></li>
		                            <li><a href="#">FAQ</a></li>
		                            <li><a href="#">Contact us</a></li>
		                            <li><a href="/login">Log in</a></li>
		                        </ul>
		                    </div>
                        </Col>
                        <Col lg={3} md={12}>
                            <div className="widget">
		                        <h4 className="widget-title">Customer Service</h4>

		                        <ul className="widget-list">
		                            <li><a href="#">Payment Methods</a></li>
		                            <li><a href="#">Money-back guarantee!</a></li>
		                            <li><a href="#">Returns</a></li>
		                            <li><a href="#">Shipping</a></li>
		                            <li><a href="#">Terms and conditions</a></li>
		                            <li><a href="#">Privacy Policy</a></li>
		                        </ul>
		                    </div>
                        </Col>
                        <Col lg={3} md={12}>
                            <div className="widget">
		                        <h4 className="widget-title">My Account</h4>

		                        <ul className="widget-list">
		                            <li><a href="#">Sign In</a></li>
		                            <li><a href="#">View Cart</a></li>
		                            <li><a href="#">My Wishlist</a></li>
		                            <li><a href="#">Track My Order</a></li>
		                            <li><a href="#">Help</a></li>
		                        </ul>
		                    </div>
                        </Col>
	            	</Row>
            	</Container>
			</div>
			<div className="footer-bottom">
                <div className="container">
                    <p className="footer-copyright">Copyright © 2019 Molla Store. All Rights Reserved.</p>

                        <figure className="footer-payments">
                            <img src="images/payments.png" alt="Payment methods" width="272" height="20" />
                        </figure>
                     
                    </div>
                </div>
            </footer>
    );
}