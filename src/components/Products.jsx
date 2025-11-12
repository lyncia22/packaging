import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const products = [
  {
    id: "plastic-bags",
    name: "Plastic Bags",
    description: "Durable plastic bags available in various sizes and colors.",
    image: "https://i.pinimg.com/736x/47/32/1a/47321a8e9b59c70907c6b0f51c9d73cb.jpg",
  },
  {
    id: "cardboard-boxes",
    name: "Cardboard Boxes",
    description: "Eco-friendly boxes perfect for shipping and storage.",
    image: "https://i.pinimg.com/736x/84/c8/0a/84c80a9bc45b0d418d6e3b06a4dff052.jpg",
  },
  {
    id: "custom-packaging",
    name: "Custom Packaging",
    description: "Personalized packaging with your brand's logo & design.",
    image: "https://i.pinimg.com/736x/6d/ac/a5/6daca5cbdbe965f7b518684370402b4e.jpg",
  },
];

  export default function Products() {
  return (
    <section className="products">
      <h3>Our Products</h3>
      <div className="product-grid">
          {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.description}</p>
          </div>
        ))}
      </div>

      {/* Dropdown instead of plain button */}
      <div className="products-dropdown">
        <span className="view-all-btn">View All Products ▼</span>
        <div className="products-dropdown-content">
          <Link to="/PackagingProducts">Packaging Products</Link>
          <Link to="/ElectricalProducts">Electrical Products</Link>
        </div>
      </div>
    </section>
  );
}
