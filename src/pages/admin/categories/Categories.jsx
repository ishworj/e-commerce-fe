import React, { useEffect } from "react";
import { UserLayout } from "../../../components/layouts/UserLayout";
import { setMenu } from "../../../features/user/userSlice";
import { useDispatch } from "react-redux";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMenu("Categories"));
  }, [dispatch]);

  return (
    <UserLayout pageTitle="Categories">
      {/* Search + Add Category Row */}
      <div className="d-flex justify-content-between align-items-center gap-2">
        <input
          type="text"
          className="form-control w-50 w-md-75"
          placeholder="Search categories..."
        />
        <button className="btn btn-primary">+ Add Category</button>
      </div>

      {/* Category Cards Section */}
      <div className="d-flex flex-wrap justify-content-around align-items-center gap-3 mt-4">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </UserLayout>
  );
};

export default Categories;
