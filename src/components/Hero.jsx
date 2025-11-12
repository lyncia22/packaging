import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import "./Hero.css";

import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpeg";
import hero5 from "../assets/hero5.jpeg";
import hero6 from "../assets/hero6.jpeg";
import hero7 from "../assets/hero7.jpeg";
import hero8 from "../assets/hero8.jpeg";
import hero9 from "../assets/hero9.jpeg";

// Array of images
const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // switch every 5 sec
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="hero">
      {/* Slideshow */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`hero-slide ${i === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Optional overlay for better text visibility */}
      <div className="hero-overlay" />

      {/* Hero Text */}
      <div className="hero-content">
        <h1> <span style={{ color: "blue" }}>McOlsen</span> Industrial Products</h1>
        <p>"Power up your brand with eco-friendly packaging and smart electrical products – built for impact, made to last."</p>
       <Link to="/contact" className="hero-btn">Contact Us</Link>

      </div>
    </section>
  );
}
