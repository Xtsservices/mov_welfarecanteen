import { useState } from "react";
import styled from "styled-components";

const BottomNav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 1.5rem 0;
  position: fixed;
  top: 80px;
  width: 100%;
  z-index: 200;

  a {
    padding-top: 0.1rem;
    margin: 0 1rem;
    color: #010080;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;
    
    &.active-link {
      border-bottom: 2px solid white;
      font-weight: 600;
    }
  }
`;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const offset = 120; // Adjust this value based on your navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <BottomNav>
      <a
        className={activeSection === "Overview" ? "active-link" : ""}
        onClick={() => handleNavClick("Overview")}
      >
        Overview
      </a>
      <a
        className={activeSection === "about" ? "active-link" : ""}
        onClick={() => handleNavClick("about")}
      >
        About
      </a>
      <a
        className={activeSection === "services" ? "active-link" : ""}
        onClick={() => handleNavClick("services")}
      >
        Services
      </a>
      <a
        className={activeSection === "gallery" ? "active-link" : ""}
        onClick={() => handleNavClick("gallery")}
      >
        Gallery
      </a>
      <a
        className={activeSection === "contact" ? "active-link" : ""}
        onClick={() => handleNavClick("contact")}
      >
        Contact Us
      </a>
    </BottomNav>
  );
}