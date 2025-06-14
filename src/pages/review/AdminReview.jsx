import React, { useEffect } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { setMenu } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import ReviewsTable from "./ReviewsTable";
import { getAllReviewAction } from "../../features/reviews/reviewAction";

const AdminReview = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setMenu("Reviews"));
  }, []);

  useEffect(() => {
    dispatch(getAllReviewAction());
  }, []);
  return (
    <UserLayout pageTitle="Reviews">
      {/* controls */} <div></div>
      <ReviewsTable />
    </UserLayout>
  );
};

export default AdminReview;
