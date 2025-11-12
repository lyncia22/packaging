import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Contact />
    </>
  );
}
