import React from "react";

function ProductCard({ title, price, description }) {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "400px",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  };

  const titleStyle = { color: "#333", fontSize: "1.5em" };
  const priceStyle = { color: "#007BFF", fontWeight: "bold" };
  const descStyle = { color: "#555", marginTop: "8px" };

  return (
    <div style={cardStyle}>
      <h2 style={titleStyle}>{title}</h2>
      <p style={priceStyle}>{price}</p>
      <p style={descStyle}>{description}</p>
    </div>
  );
}

export default productTab;
