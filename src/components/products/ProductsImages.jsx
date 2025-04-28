import React from "react";

const ProductsImages = ({ selectedProduct }) => {
  console.log(selectedProduct.images);
  return (
    <div
      className="d-flex flex-column flex-md-row justify-content-center gap-2 col-12 col-md-6 position-relative "
      style={{ minHeight: "100vh" }}
    >
      {/* image */}
      <div className="col-12 sticky-element" style={{ maxHeight: "90vh" }}>
        <img
          src={selectedProduct.images?.[0]} // this was the reason of having error
          alt={selectedProduct.name}
          className="rounded col-12"
          style={{ height: "400px" }}
        />
        {/* carousel for the secondary images  */}
        <div className="col-12" style={{ height: "100px" }}>
          {selectedProduct.images?.map((item) => {
            return (
              <img src={item} className="p-1" style={{ maxHeight: "100px" }} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsImages;
