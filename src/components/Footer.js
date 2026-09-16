import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Roshkrishna K Ranjith</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} RKR</h3>
          <p style={{ color: "#e6d6f0", fontSize: "0.85em", marginBottom: "0.5em" }}>
            Based on{" "}
            <a
              href="https://github.com/soumyajit4419/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#e3b6ff" }}
            >
              Portfolio by Soumyajit Behera
            </a>
          </p>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/LUCIFER5671"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
              >
                <AiFillGithub aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/roshkrishna-kalathil-ranjith-12a5971b3/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:kroshkrishna@gmail.com"
                style={{ color: "white" }}
                aria-label="Email kroshkrishna@gmail.com"
              >
                <AiOutlineMail aria-hidden="true" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
