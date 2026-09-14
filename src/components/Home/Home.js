import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <p style={{ paddingBottom: 15, fontWeight: 500 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </p>

              <h1
                style={{
                  fontSize: "clamp(1.8rem, 8vw, 2.5rem)",
                  paddingLeft: "clamp(0px, 4vw, 45px)",
                }}
              >
                I'M
                <strong className="main-name"> ROSHKRISHNA K RANJITH</strong>
              </h1>

              <p
                style={{
                  fontSize: "clamp(1.1rem, 4.5vw, 1.6rem)",
                  paddingLeft: "clamp(0px, 4vw, 45px)",
                  paddingTop: 10,
                }}
              >
                Graduate Researcher - AI &amp; Robotics
              </p>

              {/* Decorative: everything typed here is also stated in the intro below */}
              <div
                aria-hidden="true"
                style={{
                  position: "relative",
                  minHeight: "6em",
                  padding: "clamp(16px, 5vw, 50px) 0",
                  paddingLeft: "clamp(0px, 4vw, 50px)",
                  textAlign: "left",
                }}
              >
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h2>Find Me On</h2>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/LUCIFER5671"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile (opens in a new tab)"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/roshkrishna-kalathil-ranjith-12a5971b3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile (opens in a new tab)"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kroshkrishna@gmail.com"
                  aria-label="Email kroshkrishna@gmail.com"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
