import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact reveal">
      <h2>Get in Touch</h2>
      <div className="contact-cards">
        <div className="contact-card phone">
          <i className="fas fa-phone"></i>
          <a href="tel:+919391244691">+91 9391244691</a>
        </div>
        <div className="contact-card gmail">
          <i className="fas fa-envelope"></i>
          <a href="mailto:syam19122003@gmail.com">syam19122003@gmail.com</a>
        </div>
        <div className="contact-card linkedin">
          <i className="fab fa-linkedin"></i>
          <a
            href="https://www.linkedin.com/in/syam-sundar-p-746a0226a"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
