import React from "react";

const ArticlSliderCard = ({ cardContaint }) => {
  //   console.log(cardContaint);
  return (
    <div className="card">
      <img className="card-img" src={cardContaint.image} />
      <div className="card-text-container">
        <p className="titel">{cardContaint.titel}</p>
        <p className="containt">{cardContaint.containt}</p>
        <button className="btn">Read More</button>
      </div>
    </div>
  );
};

export default ArticlSliderCard;
