import React, { useEffect, useState } from "react";
import ProductCard from "../cards/ProductCard";
import { getRecommendationsAction } from "../../features/userHistory/userHistoryAction";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const HotPicks = ({ handleOnClickProduct }) => {
  const { user } = useSelector((state) => state.userInfo);
  const { hotPicks } = useSelector((state) => state.userHistoryInfo);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHotPicks = async () => {
      await dispatch(getRecommendationsAction(user._id));
    };
    fetchHotPicks();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  return (
    <div>
      <h1 className="mt-2 mb-0">Recommended For You</h1>
      <div className="py-5 w-100 d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 w-100">
          {hotPicks?.map((item, index) => (
            <div
              className="col"
              style={{ cursor: "pointer" }}
              key={index}
              onClick={() => handleOnClickProduct(item, user, dispatch)}
            >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotPicks;
