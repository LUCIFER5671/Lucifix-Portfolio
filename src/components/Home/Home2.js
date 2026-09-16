import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }} className="home-about-description">
            <h2 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h2>
            <p className="home-about-body">
              I’m based in the
              <b className="purple"> Detroit Metropolitan Area</b>. I’m
              currently doing my
              <b className="purple"> Master’s in AI </b>
              at the University of Michigan, and I also work full time as a
              <b className="purple"> Graduate Student Research Assistant </b>
              at PlayLab.
              <br />
              <br />
              I completed my Bachelor’s in
              <b className="purple">
                {" "}
                Electronics and Communication Engineering (ECE){" "}
              </b>
              at CUSAT (Cochin University of Science and Technology).
              <br />
              <br />
              I’ve interned at
              <b className="purple"> DRDO </b>
              (Defence Research and Development Organisation), working on
              monocular vision development, and at
              <b className="purple"> Hashraft</b>, a 3D website development
              company based in Bangalore. I’ve also worked at
              <b className="purple"> Estro Tech Robotics </b>
              as a logistics and backend developer, for a company focused on
              in-store marketing using Rob-AD.
              <br />
              <br />
              I work with
              <i>
                <b className="purple">
                  {" "}
                  Python, C++, Java, C#, Oracle SQL, MATLAB, and scikit-learn
                </b>
              </i>
              , and build with
              <i>
                <b className="purple">
                  {" "}
                  Arduino, Raspberry Pi, OpenCV, and Unity
                </b>
              </i>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
