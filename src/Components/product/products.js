import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { TailSpin } from  'react-loader-spinner'
// import productsData from "./productsData";

export default function Products(prop) {
  const [productsData , setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const base_url = "http://127.0.0.1:8000";
  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
       await axios.get(`${base_url}/product_detail/`)
        .then(res => {
          if(res.status == 200)
            setProductsData(res.data.data)
            localStorage.setItem("productsData",JSON.stringify(res.data.data))
        });
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  },[]);
    return(
      <div className="row">
        {loading && <div className="d-flex flex-wrap justify-content-center"><TailSpin color="#00BFFF" height={80} width={80}/><p className="w-100 text-center mt-2">Loading Products....</p></div>}
        {!loading && (
          productsData.map(product => {
            return (
              <div className={prop.grid}>
                <div key={product.id} className="product product-10 text-center">
                  <figure className="product-media">
                    <Link to={`/products/${product.id}`}>
                      <img src={base_url+product.photo_url} alt={product.title} className="product-image" />
                      <img src={base_url+product.photo_url} alt={product.title} className="product-image-hover" />
                    </Link>
                  </figure>
                  <div className="product-body">
                    <div className="product-action">
                      <a href="#" className="btn-cart"><span>add to cart</span></a>
                      <a href="#" className="btn-product-icon btn-wishlist"><span>Add to Wishlist</span></a>
                    </div>
                    <div className="product-intro">
                      <h3 className="product-title">
                        <Link to={`/products/${product.id}`}>
                          {product.title}
                        </Link>
                      </h3>
                      <div className="product-price">${product.actual_price}</div>
                    </div>
                    <div className="product-detail">
                      <div className="ratings-container">
                        <div className="ratings">
                          <div className="ratings-val"></div>
                        </div>
                        <span className="ratings-text">( 6 Reviews )</span>
                      </div>             
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        )}
      </div>
    );
}