import React from "react";
import "./Services.css";

export default function Services() {
  const services = [
    {
      title: "Plastic Bags",
      description: "Durable, customizable plastic bags for all your packaging needs.",
    },
    {
      title: "Cardboard Boxes",
      description: "Sturdy and eco-friendly boxes for safe transportation and storage.",
    },
    {
      title: "Custom Printed Packaging",
      description: "Add your brand’s unique touch with our printing services.",
    },
    {
      title: "Circuit Breakers & MCBs",
      description: "Reliable circuit breakers and miniature circuit breakers (MCBs) for protecting electrical systems from overloads and faults.",
    },
    {
      title: "Industrial Cables & Conductors",
      description: "High-quality electrical cables and conductors designed for safety and efficient power transmission in industrial applications.",
    },
    {
      title: "Lighting Solutions",
      description: "Energy-efficient LED bulbs, fluorescent tubes, and lighting accessories to brighten residential and commercial spaces.",
    },
  ];

  return (
    <section id="services" className="services">
      <h3>Our Services</h3>
      <div className="services-list">
        {services.map((service, idx) => (
          <div key={idx} className="service-item">
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      
      <p style={{ marginTop: "2rem", fontSize: "1.1rem", color: "#555" }}>
        ...and many more quality products and services to meet your needs.
      </p>
    </section>
  );
}
