import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        e.target.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="contact">
      <h3>Contact Us</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>

        {status === "SUCCESS" && <p className="success-message">Thanks! Your message has been sent.</p>}
        {status === "ERROR" && <p className="error-message">Oops! Something went wrong. Please try again.</p>}
      </form>
    </section>
  );
}
