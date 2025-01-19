import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import "./productTab.jsx";

function App() {
  const product = {
    title: "Smartphone XYZ",
    price: "$799",
    description:
      "This is a premium smartphone featuring an AMOLED display, 5G connectivity, and a long-lasting battery."
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Product Page</h1>
      <ProductCard
        title={product.title}
        price={product.price}
        description={product.description}
      />
    </div>
  );
}

export default App;

