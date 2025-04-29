import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

const Stars = ({}) => {
  const avgRating = 3.5; // to be provided via props
  const ttlRatings = 19; // to be provided via props
  const MAXRATING = 5;

  const fullStars = Math.floor(avgRating);
  const halfStar = !Number.isInteger(avgRating);
  const emptyStar = MAXRATING - fullStars - (halfStar ? 1 : 0);

  const Stars = [];

  for (let i = 1; i <= fullStars; i++) {
    Stars.push(<IoStar className="text-black" />);
  }
  halfStar &&
    Stars.push(<IoStarHalfOutline className="text-black text-secondary" />);

  if (emptyStar) {
    for (let i = 1; i <= emptyStar; i++) {
      Stars.push(<IoStarOutline />);
    }
  }
  return (
    <div className="d-flex align-items-center" style={{ maxHeight: "40px" }}>
      <div className="d-flex align-items-center">
        {Stars.map((item) => item)}
      </div>
    </div>
  );
};

export default Stars;
