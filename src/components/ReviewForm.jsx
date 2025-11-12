import React from "react";
import "./ReviewForm.css"; // optional, for styling

export default function ReviewForm() {
  return (
    <section className="review-form-section">
      <h3>Leave a Review</h3>

      <form action="https://formspree.io/f/xdkzvzrb" method="POST" className="review-form">
        <label>
          Your Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Your Review:
          <textarea name="message" required></textarea>
        </label>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
