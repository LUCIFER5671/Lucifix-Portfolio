import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import monocularVision from "../../Assets/Projects/monocular-vision.svg";
import faceDoor from "../../Assets/Projects/face-door.svg";
import disasterDetection from "../../Assets/Projects/disaster-detection.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monocularVision}
              imgAlt="Illustration of a single camera measuring the distance and angle to an object"
              title="DRDO - Monocular Vision Development"
              points={[
                "Developed and implemented MATLAB-based edge detection algorithms using Sobel and Canny filters.",
                "Designed a monocular vision system to measure distance and angle from 2D images with high precision.",
                "Integrated OpenCV with MATLAB to enhance image processing performance and functionality.",
                "Successfully delivered a working prototype demonstrating accurate angle and distance measurement using monocular vision, suitable for defense applications.",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceDoor}
              imgAlt="Illustration of a camera recognizing a face, unlocking a door, and sending a message"
              title="Face detection using Raspberry Pi and Pi Cam with automatic door opening and messaging system"
              points={[
                "Facial detection for home automation using Raspberry Pi and Pi Cam.",
                "Used the wave functions of sin and cos waves to figure out the facial matching patterns and tested the system on 12 novice users.",
                "Automated the backend to send messages to the users when the saved facial patterns didn't match.",
                "Did the hardware for the Raspberry Pi and the Pi Cam and soldered the prototype to a perf board.",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disasterDetection}
              imgAlt="Illustration of a circuit board with fire, flood, earthquake, and smoke sensors"
              title="Disaster detection and prediction system"
              points={[
                "Combined test circuit containing sensors to detect flood, fire, earthquake, and smoke.",
                "Developed ML algorithms for the prediction of flood and earthquake from past data.",
                "Designed the test circuits into a workable PCB.",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
