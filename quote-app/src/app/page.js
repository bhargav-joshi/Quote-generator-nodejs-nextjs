// src/app/page.js
'use client';

import { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [quote, setQuote] = useState({ text: "", author: "" });

  // Function to fetch a new quote
  const fetchQuote = async () => {
    const res = await axios.get("http://localhost:5000/quote");
    setQuote(res.data);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "150px" }}>
      <h1>Random Quote Generator</h1>
      <blockquote style={{ fontSize: "1.5rem", fontStyle: "italic", padding: "50px" }}>
        "{quote.text}"
      </blockquote>
      <p>- {quote.author}</p>
      <button onClick={fetchQuote} style={{ padding: "10px 20px", fontSize: "1rem" }}>
        Get New Quote
      </button>
    </div>
  );
}
