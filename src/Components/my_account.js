import React from "react";
import Header from "./header";
import Mybreadcrumb from "./breadcrumb";
import Footer from "./footer";
import { Tab,Nav,Col, Container, Row } from "react-bootstrap";

export default function Myaccount(prop) {
    return(
        <div className="page-wrapper">
             <Header updateState={prop.updateState} data={prop.data} isUserAthanticated={prop.isUserAthanticated} headerTheam="header" />
             <Mybreadcrumb />
             <main className="main">
                <div class="page-content">
                    <div class="dashboard">
                        <Container>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
                                <Row>
                                    <Col md={4} lg={3}>
                                        <Nav variant="dashboard" className="flex-column mb-3 mb-md-0">
                                            <Nav.Item>
                                                <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="orders">Orders</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="downloads">Downloads</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="adresses">Adresses</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="accountDetails">Account Details</Nav.Link>
                                            </Nav.Item>

                                        </Nav>
                                    </Col>
                                    <Col md={8} lg={9}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="dashboard">
                                            <p>
                                                Hello 
                                                <span class="font-weight-normal text-dark"> {prop.data.name} </span> 
                                                (not 
                                                <span class="font-weight-normal text-dark"> {prop.data.name} </span>
                                                ? 
                                                <a href="#"> Log out</a>) 
                                                <br />
                                                From your account dashboard you can view your 
                                                <a href="#left-tabs-example-tabpane-orders" class="tab-trigger-link link-underline"> recent orders </a>
                                                , manage your 
                                                <a href="#tab-address"class="tab-trigger-link"> shipping and billing addresses
                                                </a>
                                                , and 
                                                <a href="#tab-account"class="tab-trigger-link"> edit your password and account details
                                                </a>.
                                            </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="orders">
                                                <p>No order has been made yet.</p>
                                                <a href="#" className="btn btn-outline-primary-2">
                                                    <span>GO SHOP</span>
                                                    <i className="icon-long-arrow-right"></i>
                                                </a>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="downloads">
                                            <p>No downloads available yet.</p>
								    	    <a href="#" className="btn btn-outline-primary-2">
                                                <span>GO SHOP</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </a>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="adresses">
                                                <p>The following addresses will be used on the checkout page by default.</p>
                                                <Row>
                                                    <Col lg={6}>
                                                        <div className="card card-dashboard">
                                                            <div className="card-body">
                                                                <h3 className="card-title">Billing Address</h3>
                                                                <p>{prop.data.name}<br/>
                                                                {prop.addressData[2].house_building_number}<br/>
                                                                {prop.addressData[2].land_mark}<br/>
                                                                {prop.addressData[2].village_city}<br/>
                                                                {prop.addressData[2].district}<br/>
                                                                {prop.addressData[2].pin_code}<br/>
                                                                {prop.addressData[2].state}<br/>
                                                                {prop.addressData[2].country}<br/>
                                                                {prop.addressData[2].full_address}<br/>
                                                                <a href="#">Edit <i className="icon-edit"></i></a></p>
                                                            </div>
                                                        </div>
                                                    </Col>

                                                    <Col lg={6}>
                                                        <div className="card card-dashboard">
                                                            <div className="card-body">
                                                                <h3 className="card-title">Shipping Address</h3>

                                                                <p>You have not set up this type of address yet.<br/>
                                                                <a href="#">Edit <i className="icon-edit"></i></a></p>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="accountDetails">
                                                fasfafasf
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Container>
                    
                    </div>
                </div>
             </main>
             <Footer/>
        </div>
    )
}