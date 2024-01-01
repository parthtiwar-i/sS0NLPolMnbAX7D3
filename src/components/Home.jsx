import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="aboutMe">
        <h1>About Me</h1>
        <p>Name : Parth Tiwari</p>
        <p>Highest Degree : BTech</p>
        <p>Passout Year : 2024 (Final semester exams in March)</p>
        <div>
          <h3>Languages/Technologies I have worked with</h3>
          <ul>
            <li>C++</li>
            <li>Python</li>
            <li>Javascript</li>
            <li>HTML,CSS</li>
            <li>tailwind, Bootstrap</li>
            <li>ReactJs</li>
            <li>Nodejs</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>Firebase</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>
      <div className="Resume">
        <a href="../assets/Parthresume.pdf" download={"Resume.pdf"}>
          Download Resume
        </a>
      </div>
      <div className="BMI">
        <Link to={'/bmi'}>Calculate BMI</Link>
      </div>
    </div>
  );
}

export default Home;
