import React, { useEffect, useState, useMemo } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleProductAction,
  updateProductActionIndividually,
} from "../../features/products/productActions";
import Stars from "../rating/Stars";
import { createCartAction } from "../../features/cart/cartAction";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, name, price, images, reviews } = item;
  const { user } = useSelector((state) => state.userInfo);

  const [itemReviews, setItemReviews] = useState([]);

  useEffect(() => {
    const selectedReviews = reviews?.docs?.filter(
      (review) => review?.productId === _id
    );
    setItemReviews(selectedReviews || []);
  }, [_id, reviews]);

  const avgRating = useMemo(() => {
    const ratings = itemReviews.map((r) => r.rating);
    if (ratings.length === 0) return 1;
    const total = ratings.reduce((sum, val) => sum + val, 0);
    return total / ratings.length;
  }, [itemReviews]);

  const ttlRatings = itemReviews.length;

  useEffect(() => {
    if (ttlRatings > 0) {
      dispatch(updateProductActionIndividually(_id, { ratings: avgRating }));
    }
  }, [avgRating, ttlRatings, _id, dispatch]);

  const handleProductClick = () => {
    // dispatch(getSingleProductAction(_id));
    navigate(`/${_id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    user?._id ? dispatch(createCartAction(_id, 1)) : navigate("/login");
  };

  return (
    <Card
      className="border-0 shadow-sm rounded-4 overflow-hidden"
      style={{
        height: "34rem",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onClick={handleProductClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div
        style={{
          height: "60%",
          backgroundColor: "#f9f9f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={images[0]}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
            padding: "1rem",
          }}
          loading="lazy"
        />
      </div>

      <Card.Body className="d-flex flex-column justify-content-between p-3">
        <div>
          <h5 className="fw-semibold mb-1">
            {name.length > 50 ? name.slice(0, 47) + "..." : name}
          </h5>
          <div className="d-flex justify-content-between align-items-center mt-1">
            <span className="fw-bold fs-5 text-success">${price}</span>
            {ttlRatings > 0 ? (
              <Stars avgRating={avgRating} />
            ) : (
              <span className="badge bg-secondary">New</span>
            )}
          </div>
        </div>

        <button
          className="btn btn-outline-dark w-100 mt-3 rounded-pill fw-semibold"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
