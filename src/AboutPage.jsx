import React, { useState } from "react";
import "./AboutPage.css";
import ReviewForm from "./components/ReviewForm";

export default function AboutPage() {
  const [testimonials, setTestimonials] = useState([
    {
      name: "John M.",
      message: "Their packaging products are top-notch. Always reliable and delivered on time!",
    },
    {
      name: "Sarah T.",
      message: "We’ve been using their stand-alone pouches for 2 years now — great quality & price.",
    },
    {
      name: "Kwame N.",
      message: "Fantastic service and packaging that meets our eco-friendly standards. Highly recommend!",
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return;

    const newReview = { name, message };
    setTestimonials([...testimonials, newReview]); // add new review to the list
    setName("");
    setMessage("");
  };

  return (
    <section className="about-page">
      <div className="about-content">
        <h2>About Us</h2>
<p>
  We are a trusted supplier in Zimbabwe dedicated to providing high-quality, sustainable, and affordable packaging and electrical solutions. Whether you're running a bakery, a retail store, a warehouse, or a construction site, we have the products you need to protect, power, and present your goods and services.
</p>
<p>
  Our packaging range includes stand-alone pouches, ziplocks, cake packaging, food containers, cardboard boxes, bin liners, and many more. On the electrical side, we supply essential appliances such as thyristors, timers, miniature circuit breakers (MCBs), overloads, conductors, cables, geyser elements, light bulbs, sockets & switches, fluorescent lights, and fluorescent light fitters—providing solutions for homes, offices, and industrial spaces.
</p>
      <p>
  With years of industry experience, we understand that quality matters. Our goal is to deliver products that meet your needs, improve your operations, and help your business grow. Partner with us for reliable solutions that combine innovation, durability, and affordability.
     </p>
      </div>

      <div className="testimonials">
        <h3>What Our Customers Say</h3>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <p className="message">"{t.message}"</p>
              <p className="name">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>

      <ReviewForm />
     
    </section>
  );
}
