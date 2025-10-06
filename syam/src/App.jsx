import React, { useEffect } from "react";
import Header from "./Components/Header.jsx";
import About from "./Components/About.jsx";
import Skills from "./Components/Skills.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", reveal);
    window.addEventListener("load", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("load", reveal);
    };
  }, []);

  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
