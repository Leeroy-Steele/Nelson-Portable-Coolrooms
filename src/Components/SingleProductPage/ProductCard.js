import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link"; // for enquiry button
import ProductData from "../ProductData";
import { useSearchParams, useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

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
      <ButtonGroup className="mb-4 d-md-flex d-none ">
        {ProductData.map((item) => (
          <Button
            onClick={() => HandleProductTitleTabs(item.title)}
            variant="light"
            className="text-primary bg-white m-1"
          >
            {item.title}
          </Button>
        ))}
      </ButtonGroup>

      {product.length === 1 && (
        <div className="row row-cols-1 row-cols-lg-2 justify-content-center pt-2 pb-5 mb-5">
          <Card className="border-0 pt-3 pb-5">
            <Card.Body className="text-center">
              <Card.Title className="text-primary">
                {product[0].title}
              </Card.Title>

              <Card.Subtitle className="mb-3 text-muted">
                {product[0].subTitle}
              </Card.Subtitle>

              <Link
                className="btn btn-primary my-3 rounded-circle"
                to={enquiryPath}
                style={{ width: "100px", height: "100px", lineHeight: "85px" }}
              >
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

          <Carousel fade variant="dark" indicators={false} className="my-auto">
            {product[0].imgURLs.map((image) => (
              <Carousel.Item className="carouselImage" key={image}>
                <img className="d-block w-100" src={image} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}
