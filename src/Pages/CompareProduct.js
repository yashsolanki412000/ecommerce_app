import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

function CompareProduct() {
  return (
    <div>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="cross position-absolute img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-detailes">
                <h5 className="title">
                  Honor T1 7.0 1 GB ROM 7 Inch with Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-2">$100</h6>
              <div>
                <div className="product-detail">
                  <h5>Brand :</h5>
                  <p>Havels</p>
                </div>
              </div>
              </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareProduct;
