import React ,{useEffect , useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import Mybreadcrumb from "../breadcrumb";
import Header from "../header";
import Footer from "../footer";
import { Col, Container, Row } from "react-bootstrap";

function ProductDetail(prop) {
    const {productId} = useParams()
    console.log(productId)
    const [productsDetail , setProductsDetail] = useState([]);
    const base_url = "http://127.0.0.1:8000";
    useEffect(() => {
        const fetchData = async () =>{
        try {
        await axios.get(`${base_url}/product_detail/${productId}`)
            .then(res => {
            if(res.status == 200)
                setProductsDetail(res.data.data)
                console.log(res.data.data)
            });
        } catch (error) {
            console.error(error.message);
        }
        }
        fetchData();
    },[]);
    return (
        <div className="page-wrapper">
            <Header isUserAthanticated={prop.isUserAthanticated} data={prop.data} headerTheam="header" sideLogo="../images/logo.png"/>
            <Mybreadcrumb />
            <div className="bg-light pb-5 mb-4">
                <Container>
                    <OwlCarousel className='product-gallery-carousel owl-full owl-nav-dark owl-simple' dots={false} loop items={3} margin={0} nav>
                        <div class='item '>
                            <figure class="product-gallery-image">
                                <img src={base_url+productsDetail.photo_url} alt="product image" />
                            </figure>
                        </div>
                        <div class='item '>
                            <figure class="product-gallery-image">
                                <img src={base_url+productsDetail.photo_url} alt="product image" />
                            </figure>
                        </div>
                        <div class='item '>
                            <figure class="product-gallery-image">
                                <img src={base_url+productsDetail.photo_url} alt="product image" />
                            </figure>
                        </div>
                        <div class='item '>
                            <figure class="product-gallery-image">
                                <img src={base_url+productsDetail.photo_url} alt="product image" />
                            </figure>
                        </div>
                    </OwlCarousel>
                </Container>
            </div>
            <div className="product-details product-details-centered product-details-separator">
                <Container>
                    <Row>
                        <Col md={6}>
                            <h1 className="product-title">{productsDetail.title}</h1>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={{width: "80%"}}></div>
                                </div>
                                <a className="ratings-text" href="#product-review-link" id="review-link">( 2 Reviews )</a>
                            </div>
                            <div className="product-price">${productsDetail.actual_price}</div>
                            <div className="product-content">
                                <p>{productsDetail.description}</p>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="product-details-action">
                                <div className="details-action-col">
                                    <div className="product-details-quantity">
                                        <input type="number" id="qty" min="1" max="10" step="1" data-decimals="0" required/>
                                    </div>
                                    <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                </div>
                                <div className="details-action-wrapper">
                                    <a href="#" className="btn-product btn-wishlist" title="Wishlist"><span>Add to Wishlist</span></a>
                                    {/* <a href="#" className="btn-product btn-compare" title="Compare"><span>Add to Compare</span></a> */}
                                </div>
                            </div>
                            <div className="product-details-footer details-footer-col">
                                <div className="product-cat">
                                    <span>Category:</span>
                                    <a href="#">Women</a>,
                                    <a href="#">Dresses</a>,
                                    <a href="#">Yellow</a>
                                </div>

                                <div className="social-icons social-icons-sm">
                                    <span className="social-label">Share:</span>
                                    <a href="#" className="social-icon" title="Facebook" target="_blank"><i class="icon-facebook-f"></i></a>
                                    <a href="#" className="social-icon" title="Twitter" target="_blank"><i class="icon-twitter"></i></a>
                                    <a href="#" className="social-icon" title="Instagram" target="_blank"><i class="icon-instagram"></i></a>
                                    <a href="#" className="social-icon" title="Pinterest" target="_blank"><i class="icon-pinterest"></i></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer sideLogo="../images/logo.png"/>
        </div>
    )
}

export default ProductDetail