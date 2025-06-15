import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { setMenu } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ReviewsTable from "./ReviewsTable";
import { getAllReviewAction } from "../../features/reviews/reviewAction";
import useForm from "../../hooks/useForm";
import ControlBarReview from "./ControlBarReview";
import { filterFunctionReviews } from "../../utils/filterProducts";

const AdminReview = () => {
  const dispatch = useDispatch();
  const { allReviews } = useSelector((state) => state.reviewInfo);
  const { form, handleOnChange } = useForm({
    searchQuery: "",
    status: "all",
    others: "newest",
  });

  const [displayReviews, setDisplayReviews] = useState([]);
  console.log(displayReviews, allReviews);
  useEffect(() => {
    dispatch(setMenu("Reviews"));
    dispatch(getAllReviewAction());
  }, []);

  useEffect(() => {
    setDisplayReviews(filterFunctionReviews(form, allReviews));
  }, [form, allReviews]);

  return (
    <UserLayout pageTitle="Reviews">
      {/* controls */}
      <ControlBarReview
        form={form}
        handleOnChange={handleOnChange}
        allReviews={allReviews}
      />
      <hr />
      {displayReviews.length <= 0 && (
        <p className="text-center" style={{ minHeight: "80vh" }}>
          No Reviews here yet...
        </p>
      )}
      <ReviewsTable allReviews={displayReviews} />
    </UserLayout>
  );
};

export default AdminReview;
