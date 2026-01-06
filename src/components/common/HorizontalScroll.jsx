import React from "react";
import "@/styles/common/horizontal.css";

const HorizontalScroll = () => {
  const content =
    "Software Development * Web & Mobile Applications * Cloud Computing * Cybersecurity Solutions * AI & Machine Learning * IT Consulting * DevOps Services";

  return (
    <div className="marquee-container">
      <div className="marquee">
        <span>{content}</span>
      </div>
      <div className="marquee">
        <span>{content}</span>
      </div>
    </div>
  );
};

export default HorizontalScroll;
