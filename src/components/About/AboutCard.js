import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey there!, I am <span className="purple">Kousik Bollapragada </span>, a passionate 🌟 web developer hailing
            from <span className="purple"> Hyderabad, India.</span>
            <br />  I'm all about building sustainable web solutions that make a lasting impact. With my expertise in Node.js, React.js, and Next.js, 
                      I love shaping the future with cutting-edge tech!
            <br />
                    Let's collaborate and create something amazing together! 💡🌐🧠
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sports & Pastimes
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Fiction
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Manners Maketh Man!"{" "}
          </p>
          <footer className="blockquote-footer">William Shakespeare</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
