import { useSearchParams } from "react-router-dom";
import { useState} from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import {
  useNavigate,
} from "react-router-dom";

// for bootstrap
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function EnquiryForm() {
  const navigate = useNavigate();

  const [fName, fNameSet] = useState("");
  const [lName, lNameSet] = useState("");
  const [email, emailSet] = useState("");
  const [phoneNumber, phoneNumberSet] = useState("");
  const [city, citySet] = useState("");
  const [message, messageSet] = useState("");

  // prepopulate message from enquiry button if used
  const [searchParams, setSearchParams] = useSearchParams();
  const enquirySubject = "Enquiry about: " + searchParams.get("enquirySubject");

  //for modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  function submitButtonClick(e) {
    e.preventDefault();
    let messageWithLineBreaks = message.replace("  ", "<br>");

    // add axios call here
    const data = JSON.stringify({
      api_key: "api-43E42C2A96AB11ED9716F23C9333BA00",
      sender: "Website_For_Nelson_Portable_Coolrooms@mail.com",
      to: ["sales@nelsonportablecoolrooms.co.nz"],

      //define email content here

      subject: "Email Enquiry",

      html_body: `  
        <h2>enquiry from: ${fName} ${lName}</h2>
        <h3>reply to: ${email}</h3>
        <h3>phone number: ${phoneNumber}</h3>
        <h3>city: ${city}</h3>
        <p>enquiry: ${messageWithLineBreaks}</p>
        `,
      text_body: "",
    });

    const config = {
      method: "post",
      url: "https://api.smtp2go.com/v3/email/send",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    setShow(true);
  }

  function modalCloseButton() {
    // on modal close, navigate to homepage
    navigate("/");
  }

  return (
    <div className="bg-primary">
      <div className="enquiryFormDiv">
        <h2 className="p-5 text-center display-4 fw-bold">Enquiry Form</h2>

        <Form id="enquiryAnchorTag">
          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  placeholder="Joe"
                  onChange={(e) => {
                    fNameSet(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  placeholder="Blogs"
                  onChange={(e) => {
                    lNameSet(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  placeholder="027 555 5555"
                  onChange={(e) => {
                    phoneNumberSet(e.target.value);
                  }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>City</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    citySet(e.target.value);
                  }}
                >
                  <option className="text-black">Select City</option>

                  <option className="text-black" value="Auckland">
                    Auckland
                  </option>
                  <option className="text-black" value="Wellington">
                    Wellington
                  </option>
                  <option className="text-black" value="Christchurch">
                    Christchurch
                  </option>

                  <option className="text-black" value="Hamilton">
                    Hamilton
                  </option>
                  <option className="text-black" value="Tauranga">
                    Tauranga
                  </option>
                  <option className="text-black" value="Napier">
                    Napier
                  </option>

                  <option className="text-black" value="Dunedin">
                    Dunedin
                  </option>
                  <option className="text-black" value="Palmerston North">
                    Palmerston North
                  </option>
                  <option className="text-black" value="Rotorua">
                    Rotorua
                  </option>

                  <option className="text-black" value="Nelson">
                    Nelson
                  </option>
                  <option className="text-black" value="Blenheim">
                    Blenheim
                  </option>
                  <option className="text-black" value="Kaikoura">
                    Kaikoura
                  </option>

                  <option className="text-black" value="North Island Other">
                    North Island Other
                  </option>
                  <option className="text-black" value="South Island Other">
                    South Island Other
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => {
                emailSet(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enquiry</Form.Label>
            {searchParams.get("enquirySubject") === null ? (
              <Form.Control
                className="textAreaEnquiryForm"
                as="textarea"
                rows={5}
                onChange={(e) => {
                  messageSet(e.target.value);
                }}
                defaultValue=""
              />
            ) : (
              <Form.Control
                className="textAreaEnquiryForm"
                as="textarea"
                rows={5}
                onChange={(e) => {
                  messageSet(e.target.value);
                }}
                defaultValue={enquirySubject}
              />
            )}
          </Form.Group>

          <Button
            className="btn btn-danger"
            type="submit"
            onClick={submitButtonClick}
          >
            Submit Enquiry
          </Button>
        </Form>

        <>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title className="text-black">
                Your Enquiry has been submitted
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="text-black">{`Name ${fName} ${lName}`}</p>
              <br></br>
              <p className="text-black">{`Phone ${phoneNumber}`}</p>
              <br></br>
              <p className="text-black">{`Email ${email}`}</p>
              <br></br>
              <p className="text-black">{`City ${city}`}</p>
              <br></br>
              <p className="text-black">{`Message ${message}`}</p>
            </Modal.Body>

            <Modal.Footer className="text-black">
              <Button variant="secondary" onClick={modalCloseButton}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
