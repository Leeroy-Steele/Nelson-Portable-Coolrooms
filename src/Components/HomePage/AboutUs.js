import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import MainLogoFile from "../../Components/MainLogo";
import Badge from "react-bootstrap/Badge";

export default function AboutUs() {
  return (
    <div
      className="px-lg-5 py-5 mt-5 row bg-primary justify-content-center"
      style={{
        border: "30px solid transparent",
        padding: "15px",
        borderImage: `url(${MainLogoFile}) 30 round`,
      }}
    >
      <div className="col-lg-10 col-md-10 pb-lg-3">
        <br></br>
        <br></br>
        <hr></hr>
        <h2 className="display-3 text-center pt-4">
          ABOUT US{"   "}
          <Badge bg="primary" >
            {/* <img width="120" height="120" src={questionMark} alt="about" /> */}
            <img width="120" height="120" style={{filter:"Invert(1)"}} src="https://img.icons8.com/ios/200/about.png" alt="about"/>
          </Badge>
        </h2>
        <hr></hr>

        <p className="p-4 fs-5">
          At Nelson Portable Coolrooms we are able to call on over 2 decades of
          knowledge from our wide experience in the Shipping container,
          Commercial Refrigeration and Hire sector industries.
          <br />
          <br />
          Our goal is to meet and exceed the expectations of every one of our
          customers. <br />
          <br />
          We pride ourselves on our commitment to provide a professional and
          speedy service at all times, whilst maintaining the highest quality of
          work.We offer a high premium service and range of products to assist
          business in the ever more integral part of our economy. The
          temperature controlled food industry.
        </p>
        <br></br>
        <br></br>
        <hr className="mt-5"></hr>
        <h2 className="display-3 pb-2 text-center pt-4">OUR SERVICES{"   "}          
        <Badge bg="primary">
            <img width="120" height="120" style={{filter:"Invert(1)"}} src="https://img.icons8.com/ios/100/000000/wrench--v1.png" alt="about" />
          </Badge></h2>
        <hr></hr>
      </div>

      {/* <img width="100" height="100" src="https://img.icons8.com/ios/100/000000/wrench--v1.png" alt="wrench--v1"/> */}





      <div
        className="col-lg-10 col-md-10 m-mb-3 px-4 pb-lg-3"
        style={{ maxWidth: "600px" }}
      >
        <ListGroup variant="flush mb-5 fs-5">
          <ListGroup.Item className="bg-primary text-white">
            Short or Long term Hire of Portable Refrigeration products
          </ListGroup.Item>
          <ListGroup.Item className="bg-primary text-white">
            Delivery and pickup service at start and conclusion of hire
          </ListGroup.Item>
          <ListGroup.Item className="bg-primary text-white">
            Custom size units for your particular needs
          </ListGroup.Item>
          <ListGroup.Item className="bg-primary text-white">
            Coolroom and Freezer solutions available
          </ListGroup.Item>
          <ListGroup.Item className="bg-primary text-white">
            Comprehensive repair and service of all our equipment during hire
            and after sale
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
