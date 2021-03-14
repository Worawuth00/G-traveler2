import React from "react";
import { Link } from "react-router-dom";

const Tour = ({ _id, name, description, location, price, image }) => {
  return (
    <article className="tours-card">
      <div className="tours-img">
        <img src={image} alt={name} />
      </div>
      <div className="tours-name">
        <Link to={`/tour/${_id}`}>
          <h3>{name}</h3>
        </Link>
        <h4>฿ {price}</h4>
      </div>
      <hr />
      <div className="tours-detail">
        <p>{description}</p>
      </div>
      <div className="tours-footer">
        <p>
          <span>
            <i className="fas fa-map-marker-alt"></i> {location}
          </span>
        </p>
        <Link to={`/tour/${_id}`}>
          <button type="button" className="btn">
            <h4>more info</h4>
          </button>
        </Link>
      </div>
    </article>
  );
};

export default Tour;
