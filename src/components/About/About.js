import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

// From content-notes.md, newest first
const experience = [
  {
    title: "Graduate Student Research Assistant (GSRA)",
    org: "University of Michigan - PlayLab",
    dates: "Jan 2026 – Present",
  },
  {
    title: "Logistics and Backend Developer",
    org: "Estro Tech Robotics",
    dates: "May 2025 – Jul 2025 · 3 months",
    detail:
      "A company focused on in-store marketing using Rob-AD (The future of in-store marketing).",
  },
  {
    title: "Data Analyst",
    org: "Triluxo Technologies",
    dates: "Aug 2024 – Oct 2024 · 3 months",
  },
  {
    title: "Intern",
    org: "DRDO (Defence Research and Development Organisation)",
    dates: "Jun 2024 – Jul 2024 · 2 months",
    detail: "Monocular Vision development.",
  },
  {
    title: "Data Analyst",
    org: "UniDatos",
    dates: "Mar 2024 – Jun 2024 · 4 months",
  },
  {
    title: "Business Development Specialist",
    org: "Bolt IoT",
    dates: "Feb 2024 – Apr 2024 · 3 months",
  },
  {
    title: "Project Associate",
    org: "Hashraft",
    dates: "Jan 2024 – Jun 2024 · 6 months",
    detail: "A 3D website development company based in Bangalore.",
  },
  {
    title: "ECSA (Electronics and Communication Student Association)",
    dates: "Aug 2023 – Jan 2024 · 6 months",
  },
  {
    title: "Business Development Manager",
    org: "Carbon Rank",
    dates: "Mar 2023 – Jan 2025 · 1 yr 11 months",
  },
  {
    title: "Direct Sales Specialist",
    org: "Debales AI",
    dates: "Mar 2023 – Jan 2025 · 1 yr 11 months",
  },
];

function About() {
  return (
    <>
      {" "}
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            Work <strong className="purple">Experience</strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={8} className="resume" style={{ textAlign: "left" }}>
              {experience.map((job) => (
                <div className="resume-item" key={job.title + job.dates}>
                  <h3 className="resume-title">{job.title}</h3>
                  <p>
                    {job.org && (
                      <>
                        <strong>{job.org}</strong>
                        <br />
                      </>
                    )}
                    <em>{job.dates}</em>
                  </p>
                  {job.detail && <p>{job.detail}</p>}
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;
