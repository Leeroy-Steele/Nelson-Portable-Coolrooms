import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // for enquiry button
import ProductData from "../ProductData";
import { useSearchParams, useNavigate } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

// for bootstrap
import Card from "react-bootstrap/Card";

export default function ProductCard() {
  const [searchParams] = useSearchParams();
  const [productTitle] = useState(searchParams.get("productTitle"));
  const [product, setProduct] = useState(
    ProductData.filter((item) => item.title === productTitle)
  );

  // Change product when product button is pressed
  const navigate = useNavigate();
  const HandleProductTitleTabs = (k) => {
    navigate(`/product?${k}`);
    setProduct(ProductData.filter((item) => item.title === k));
  };

  // enquiry button path to navigate to (use query params to part fill enquiry form)
  let enquiryPath = `/Contact?enquirySubject=${productTitle}#enquiryAnchorTag`;

  return (
    <div className="container">
      <Tabs
        defaultActiveKey={productTitle}
        id="fill-tab-example"
        className="mb-3 d-md-flex d-none"
        justify
        onSelect={(k) => HandleProductTitleTabs(k)}
      >
        {ProductData.map((item) => (
          <Tab eventKey={item.title} title={item.title}></Tab>
        ))}
      </Tabs>

      <div className="row row-cols-1 row-cols-md-2 justify-content-center pt-3 pb-5 mb-5">
        <Card className="border-0 pt-3 pb-5">
          <Card.Body className="text-center">
            <Card.Title className="text-primary">{product[0].title}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              {product[0].subTitle}
            </Card.Subtitle>

            <Link className="btn btn-primary w-25 my-3" to={enquiryPath}>
              Enquire
            </Link>

            <Card.Text className="text-dark text-start mt-3">
              {product[0].text1}
            </Card.Text>

            <Card.Text className="text-dark text-start">
              {product[0].text2}
            </Card.Text>

            <Card.Text className="text-dark text-start">
              {product[0].text3}
            </Card.Text>

            <Card.Text className="text-dark text-start">
              {product[0].text4}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="border-0 pt-3 pb-5">
          <Card.Img
            variant="top"
            src={product[0].imgURLs[0]}
            className="cardImage"
          />
        </Card>
      </div>
    </div>
  );
}
