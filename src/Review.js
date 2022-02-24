import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [review, setReview] = useState(0);
  const { id, name, job, image, text } = people[review];

  const nextReview = () => {
    setReview((previus) => {
      if (previus === 3) {
        return 0;
      }

      return previus + 1;
    });
  };

  const previuosReview = () => {
    setReview((previus) => {
      if (previus === 0) {
        return people.length - 1;
      }

      return previus - 1;
    });
  };

  const randomReview = () => {
    const numberReview = Math.floor(Math.random() * 3 + 1);
    setReview(numberReview);
  };
  return (
    <>
      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">{<FaQuoteRight />}</span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="">
          <button onClick={() => previuosReview()} className="prev-btn">
            {<FaChevronLeft />}
          </button>
          <button onClick={() => nextReview()} className="prev-btn">
            {<FaChevronRight />}
          </button>
        </div>
        <button onClick={() => randomReview()} className="random-btn">
          surprise me
        </button>
      </article>
    </>
  );
};

export default Review;
