import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="about-card-text">
            Hi everyone! I’m{" "}
            <span className="purple">Roshkrishna K Ranjith</span>, based in
            the <span className="purple">Detroit Metropolitan Area</span>.
            <br />
            I’m currently doing my{" "}
            <span className="purple">Master’s in AI</span> at the{" "}
            <span className="purple">University of Michigan</span> (2025 – ),
            and I also work full time as a{" "}
            <span className="purple">Graduate Student Research Assistant</span>{" "}
            at PlayLab.
            <br />I completed my Bachelor’s in{" "}
            <span className="purple">
              Electronics and Communication Engineering
            </span>{" "}
            from <span className="purple">CUSAT</span> (Cochin University of
            Science and Technology) (2021 – 2025).
            <br />
            <br />
            Along with my technical skills, I bring:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Leadership
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Marketing
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Sales
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Communication
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> MS Office
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
