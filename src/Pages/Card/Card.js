import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ place }) => {
  const { city, img, details } = place;
  return (
    <div className="card w-1/2 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="card_thumbnail" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center font-bold text-2xl">{city}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end">
          <Link to={"/contract"} className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
