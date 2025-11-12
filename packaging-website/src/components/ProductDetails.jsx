import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const products = [
  {
    id: "plastic-bags",
    name: "Plastic Bags",
    description: "Durable plastic bags available in various sizes and colors.",
    image: "https://via.placeholder.com/600x400?text=Plastic+Bags",
    details:
      "Our plastic bags are made from high-quality materials, perfect for retail and packaging needs.",
  },
  {
    id: "cardboard-boxes",
    name: "Cardboard Boxes",
    description: "Eco-friendly boxes perfect for shipping and storage.",
    image: "https://via.placeholder.com/600x400?text=Cardboard+Boxes",
    details:
      "Strong and sustainable cardboard boxes available in multiple sizes and thicknesses.",
  },
  // same products array here (or move to a shared file)
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <section className="product-details">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="short-desc">{product.description}</p>
      <p>{product.details}</p>
      <button className="contact-btn">Contact Us</button>
    </section>
  );
}
