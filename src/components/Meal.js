import React from "react";
import { Link } from "react-router-dom";

export default function Meal({ id, name, image, category, area }) {
  return (
    <div className="card mt-3 shadow-sm">
      <img src={image} alt="meal avatar" className="card-img-top" />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{category}</p>
        <p className="card-text">{area}</p>

        <Link to={`/meals/${id}`} className="btn btn-info">
          Details
        </Link>
      </div>
    </div>
  );
}
