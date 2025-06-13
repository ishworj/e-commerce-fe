import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Review = ({
  productId,
  isReviewing,
  setIsReviewing,
  handleToggleReview,
}) => {
  const [ratings, setRatings] = useState(1);

  const { user } = useSelector((state) => state.userInfo);
  //   console.log(isReviewing);
  const isOpen = isReviewing === productId;
  // review
  const handleReview = (productId) => {};
  return (
    <div className="position-relative">
      {isOpen && (
        <div
          className="border rounded shadow bg-white d-flex z-3 gap-3 align-items-center position-absolute"
          style={{
            minHeight: "200px",
            minWidth: "300px",
            top: "-50px",
            left: "-325px",
          }}
        >
          {/* stars */}
          <div
            className="d-flex flex-column gap-2 position-absolute align-items-center"
            style={{
              top: "10px",
              left: "18%",
              bottom: "10px",
            }}
          >
            <div className="d-flex">
              {new Array(5).fill("").map((item, i) => (
                <FaStar
                  key={i}
                  onClick={() => setRatings(i + 1)}
                  className={i < ratings ? "text-warning" : "text-secondary"}
                  style={{ fontSize: "20px" }}
                />
              ))}
            </div>
            <textarea
              name=""
              id=""
              className="px-2"
              placeholder="Comment Here ...."
              style={{
                width: "100%",
                height: "120px",
                resize: "none",
                padding: "8px",
                fontSize: "16px",
              }}
            ></textarea>
            <Button>Submit</Button>
          </div>
        </div>
      )}
      {!isOpen ? (
        <MdOutlineRateReview
          className="fs-4"
          style={{ cursor: "pointer" }}
          title="Feedback"
          onClick={() => handleToggleReview(productId)}
        />
      ) : (
        <RxCross1
          className="fs-4 text-danger border"
          style={{ cursor: "pointer" }}
          title="Close"
          onClick={() => setIsReviewing(!isReviewing)}
        />
      )}
    </div>
  );
};

export default Review;
