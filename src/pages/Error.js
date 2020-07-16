import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container text-center">
      <h3 className="my-5">Oops! requested page is not available</h3>
      <Link to="/" className="btn btn-info">
        Back to Home
      </Link>
    </div>
  );
}
