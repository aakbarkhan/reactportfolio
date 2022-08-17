import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  // const formInitialDetails = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // }
  // const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  // const [status, setStatus] = useState({});

  // const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value
  //     })
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code === 200) {
  //     setStatus({ succes: true, message: 'Message sent successfully'});
  //   } else {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form action="https://formspree.io/f/mdoybpze" method="POST">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      {/* <input type="text" id="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} /> */}
                      <label for="name">
                          <input name="name" required type="text" id="name"  placeholder="Type your name" maxlength="30" aria-label="name" />
                      </label>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      {/* <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/> */}
                      <label for="name">
                          <input name="name" required type="text" id="name"  placeholder="Type your last name" maxlength="30" aria-label="name" />
                      </label>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      {/* <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} /> */}
                      <label for="emaill">
                          <input  type="email" placeholder="Type your email" required name="email" id="emaill" aria-label="name"/>
                      </label>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      {/* <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/> */}
                      <label for="phone">
                          <input  type="" placeholder="Type your phone no." required name="phone" id="phone" aria-label="phone"/>
                      </label>
                    </Col>
                    <Col size={12} className="px-1">
                      {/* <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> */}
                      <textarea name="text" maxlength="500" id="input" rows="6" required
                                placeholder="Enter text here"></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}