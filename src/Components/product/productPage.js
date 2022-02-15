import React from "react";
import Mybreadcrumb from "../breadcrumb";
import Header from "../header";
import Products from "./products";
import Footer from "../footer";

function ProductPage(prop) {
  return (
    <div className='page-wrapper'>
        <Header updateState={prop.updateState} data={prop.data} isUserAthanticated={prop.isUserAthanticated} headerTheam="header"/>
        <Mybreadcrumb />
        <Products grid="col-lg-4"/>
        <Footer />
    </div>
  );
}

export default ProductPage;