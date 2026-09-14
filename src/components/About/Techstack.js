import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCsharp,
  SiArduino,
  SiUnity,
  SiScikitlearn,
  SiOpencv,
  SiRaspberrypi,
} from "react-icons/si";
import { TbMathFunction } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";
import C from "../../Assets/TechIcons/C++.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BiNetworkChart fontSize={"24px"} />
        <div className="tech-icons-text">DSA</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="Oracle SQL" />
        <div className="tech-icons-text">DBMS (Oracle SQL)</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino fontSize={"24px"} />
        <div className="tech-icons-text">Arduino</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp fontSize={"24px"} />
        <div className="tech-icons-text">C#</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity fontSize={"24px"} />
        <div className="tech-icons-text">Unity</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn fontSize={"24px"} />
        <div className="tech-icons-text">scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbMathFunction fontSize={"24px"} />
        <div className="tech-icons-text">MATLAB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv fontSize={"24px"} />
        <div className="tech-icons-text">OpenCV</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRaspberrypi fontSize={"24px"} />
        <div className="tech-icons-text">Raspberry Pi</div>
      </Col>
    </Row>
  );
}

export default Techstack;
