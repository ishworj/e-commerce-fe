import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleProductAction,
  updateProductActionIndividually,
} from "../../features/products/productActions";
import Stars from "../rating/Stars";
import { BiSolidCartAdd } from "react-icons/bi";
import { createCartAction } from "../../features/cart/cartAction";
import { useNavigate } from "react-router-dom";
import { getPubReviewAction } from "../../features/reviews/reviewAction";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, name, description, price, images, reviews } = item;
  const { user } = useSelector((state) => state.userInfo);
  const { pubReviews } = useSelector((state) => state.reviewInfo);

  const [avgRating, setAvgRating] = useState(1);
  const [ttlRatings, setTtlRatings] = useState(0);
  const [itemReviews, setItemReviews] = useState([]);

  const handleOnProductClick = async (_id) => {
    dispatch(getSingleProductAction(_id));
  };

  const handleAddToCart = (_id) => {
    console.log("clcicked");
    const quantity = 1;
    user._id ? dispatch(createCartAction(_id, quantity)) : navigate("/login");
  };

  useEffect(() => {
    const avgRatings = async () => {
      const ratings = await itemReviews.map((item) => item.rating);
      const sum = await ratings.reduce((acc, curr) => acc + curr, 0);
      setTtlRatings(ratings.length);
      setAvgRating(sum / ratings.length);
      if (ratings.length === 0) {
        setAvgRating(1);
      }

      await updateProductActionIndividually(_id, { ratings: avgRating });
    };
    avgRatings();
  }, [itemReviews]);

  const fetchSelectedReview = async () => {
    await dispatch(getPubReviewAction());
  };
  const setReview = async () => {
    const selectedReviews = await pubReviews?.docs.filter(
      (item) => item?.productId === _id
    );
    setItemReviews(selectedReviews);
  };

  useEffect(() => {
    fetchSelectedReview();
  }, [dispatch]);

  useEffect(() => {
    setReview();
  }, [_id, pubReviews]);

  return (
    <Card
      // width: "18em",
      style={{ height: "30em" }}
      className="pb-3 pt-1 shadow-lg border-0 d-flex justify-content-center"
      onClick={() => handleOnProductClick(_id)}
    >
      <Card.Img
        variant="top"
        src={images[0]}
        style={{ height: "70%", width: "80%", margin: "auto" }}
        loading="lazy"
      />
      <Card.Body
        className="d-flex flex-column justify-content-between"
        style={{ height: "25%" }}
      >
        <b style={{ height: "20px" }} className="fs-5">
          {name.slice(0, 45)}
          {name.length > 45 ? "..." : ""}
        </b>
        <div className="text-end">
          <button
            className="fs-3 px-2 border hoverCart rounded"
            style={{
              background: "black",
              color: "white",
            }}
            title="Add to Cart"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleAddToCart(_id);
            }}
          >
            <BiSolidCartAdd />
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center py-2 fs-4">
          <span className="d-flex justify-content-center align-items-center">
            <p
              className="d-flex justify-content-center align-items-center"
              style={{ height: "20px", fontSize: "12px" }}
            >
              $&nbsp;
            </p>{" "}
            {price}
          </span>
          <Stars avgRating={avgRating} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
