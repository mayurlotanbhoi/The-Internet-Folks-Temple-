import React, { useState, useEffect, useRef } from "react";
import ArticleCard from "./ArticlSliderCard";

import card1 from "../Assets/card1.png";
import card2 from "../Assets/card2.png";
import card3 from "../Assets/card3.png";
import card4 from "../Assets/card4.png";
import card5 from "../Assets/card5.png";
import card6 from "../Assets/card6.png";

const cardArray = [
  {
    image: card1,
    titel: "Grilled  Tomatoes at Home",
    containt:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: card2,
    titel: "Snacks for Travel",
    containt:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: card3,
    titel: "Post-workout Recipes",
    containt:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: card4,
    titel: "How To Grill Corn",
    containt:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: card5,
    titel: "Crunchwrap Supreme",
    containt:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    image: card6,
    titel: "Broccoli Cheese Soup",
    containt:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

const Articles = () => {
  const [cardData, setcardData] = useState([]);
  const [forward, setforward] = useState(3);
  const [pageCount, setPageCount] = useState(-1);

  const forwardBtn = useRef();
  const backBtn = useRef();

  useEffect(() => {
    if (pageCount + 1 === cardArray.length / 3) {
      forwardBtn.current.disabled = true;
      //       return;
    } else {
      forwardBtn.current.disabled = false;
    }

    if (pageCount === -1 || pageCount === cardArray.length / 3) {
      backBtn.current.disabled = true;
      //       return;
    } else {
      backBtn.current.disabled = false;
    }

    console.log("page" + " " + pageCount);
    if (pageCount < cardArray.length / 3) {
      const cartdata = cardArray.slice(forward - 3, forward);
      console.log(forward - 3);
      console.log(forward);
      setcardData(cartdata);
      setPageCount((pre) => pre + 1);
    } else {
      //       if (pageCount === 1) {
      //         backBtn.current.disabled = true;
      //         //       return;
      //       } else {
      //         backBtn.current.disabled = false;
      //       }

      if (pageCount > 1) {
        setPageCount((pre) => pre - 1);
        const cartdata = cardArray.slice(forward - 3, forward);
        setcardData(cartdata);
      }
    }
  }, [forward]);

  //   console.log(cardData);
  return (
    <section className="articles">
      {/* <img src={cardArray[0].image} style={{ width: "60px" }} /> */}
      <div className="article-slider">
        <h1 className="Article-heading">Latest Articles</h1>
        <div className="Article-heading-card">
          {cardData.map((items) => {
            return <ArticleCard cardContaint={items} />;
          })}
        </div>
      </div>

      <div className="slider-btn">
        <button
          className="slider-btn-back"
          onClick={() => setforward((pre) => pre - 3)}
          ref={backBtn}
        >
          &lt;
        </button>
        {`${pageCount} / ${cardArray.length / 3}`}
        <button
          className="slider-btn-forward"
          onClick={() => setforward((pre) => pre + 3)}
          ref={forwardBtn}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Articles;
