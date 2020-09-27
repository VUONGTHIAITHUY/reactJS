import React from "react";
import Product from "./Product";

export default function ProductList() {
  return (
    <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
         <Product/>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <Product/>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <Product/>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
        <Product/>
        </div>
      </div>
    </section>
  );
}
