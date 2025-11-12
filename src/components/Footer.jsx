import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} McOlsen Industrial Products. All rights reserved.</p>

      <div className="social-links">
        <a
          href="https://www.facebook.com/McOlsenIndustrialProductsPvtLtd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        <a
          href="https://wa.me/263772221996"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <a
          href="mailto:admin@mcolsenindustrial.co.zw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>

      <div className="contact-details">
        <p><strong>Call us:</strong> <a href="tel:+263242001748">+263 24 200 1748</a></p>
        <p><strong>WhatsApp:</strong> , <a href="https://wa.me/263782086809" target="_blank" rel="noopener noreferrer">+263 78 208 6809</a> ,<a href="tel:+263772221996">+263 77 222 1996</a></p>
        <p><strong>Email:</strong> <a href="mailto:admin@mcolsenindustrial.co.zw">admin@mcolsenindustrial.co.zw</a>, <a href="mailto:mcolsen.industrial@gmail.com">mcolsen.industrial@gmail.com</a></p>
        <p><strong>Address:</strong> 8967 stortford rd tynwald plots Harare, Zimbabwe</p>
      </div>
    </footer>
  );
}
