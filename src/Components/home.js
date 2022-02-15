import Header from '../Components/header';
import OwlCarousel from 'react-owl-carousel';
import Products from './product/products';
import Footer from "./footer";

export default function Home(prop) {
  return (
    <div className='page-wrapper'>
      <div className="background">
        <Header updateState={prop.updateState} data={prop.data} isUserAthanticated={prop.isUserAthanticated} headerTheam="header" />
        <div class="slider">
          <div class="intro">
            <div class="title">
              <h3>Premium Outdoor Gear & Clothing</h3>
            </div>
            <div class="content">
              <h4><i>Our New Collections 2019</i></h4>
              <h5>Ski & Snowboard</h5>
            </div>
            <div class="action">
              <a href="#">discover now</a>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,224L80,213.3C160,203,320,181,480,197.3C640,213,800,267,960,266.7C1120,267,1280,213,1360,186.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      <div className='main'>
        <section className="logos">
          <div class="container">
            <div class="heading">
              <p class="heading-cat">trending brands</p>
            </div>
          </div>
          <OwlCarousel className='owl-simple' dots={false} loop items={6} margin={10} nav>
            <div class='item '>
              <a href="#" class="brand">
                <img src="images/1.png" alt="Brand Name" />
              </a>
            </div>
            <div class='item'>
              <a href="#" class="brand">
                <img src="images/2.png" alt="Brand Name" />
              </a>
            </div>
            <div class='item'>
              <a href="#" class="brand">
                <img src="images/3.png" alt="Brand Name" />
              </a>
            </div>
            <div class='item'>
              <a href="#" class="brand">
                <img src="images/4.png" alt="Brand Name" />
              </a>
            </div>
            <div class='item'>
              <a href="#" class="brand">
                <img src="images/5.png" alt="Brand Name" />
              </a>
            </div>
            <div class='item'>
              <a href="#" class="brand">
                <img src="images/6.png" alt="Brand Name" />
              </a>
            </div>
            <div class='item'>
              <a href="#" class="brand">
                <img src="images/1.png" alt="Brand Name" />
              </a>
            </div>
          </OwlCarousel>
        </section>
        <section className="best-sellers">
          <div className='container'>
            <div className="heading">
              <p className="heading-cat">favourite from every category</p>
              <h3 className="heading-title">Best Sellers</h3>
            </div>
            {/* <Outlet /> */}
            <Products grid="col-lg-4"/>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}