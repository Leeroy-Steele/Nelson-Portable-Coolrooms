import React from "react";
import ProductTile from "./ProductTile";
import ProductData from "../ProductData";

export default function ProductsPage() {
  return (
    <div className="container">
      <h2 className="text-primary text-center mt-4 py-5 ">OUR PRODUCTS</h2>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center pt-3 pb-5 mb-5">
        {ProductData.map((product) => {
          return (
            <ProductTile
              imgURL={product.imgURLs[0]}
              title={product.title}
              subTitle={product.subTitle}
              text2={product.text2}
              text1={product.text1}
              text3={product.text3}
              uListItems={product.uListItems}
              key={product.title}
            />
          );
        })}
      </div>
    </div>
  );
}
