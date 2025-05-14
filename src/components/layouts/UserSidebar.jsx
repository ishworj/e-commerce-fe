import React from "react";
import { Stack } from "react-bootstrap";
import { FaBoxOpen, FaTags, FaCheck } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSelectedCategory } from "../../features/category/categorySlice";

const sidebarLinks = [
  {
    icon: <FaBoxOpen />,
    title: "Dashboard",
    to: "/admin/adminDashboard",
    isAdminOnly: true,
  },
  {
    icon: <FaBoxOpen />,
    title: "Products",
    to: "/admin/products",
    isAdminOnly: true,
  },
  {
    icon: <FaTags />,
    title: "Categories",
    to: "/admin/categories",
    isAdminOnly: true,
  },
  {
    icon: <FaCheck />,
    title: "Orders",
    to: "/admin/orders",
    isAdminOnly: true,
  },
  {
    icon: <MdRateReview />,
    title: "Reviews",
    to: "/admin/reviews",
    isAdminOnly: true,
  },
];

export const UserSidebar = () => {
  const { user, menu } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  const visibleLinks =
    user?.role === "admin"
      ? sidebarLinks
      : sidebarLinks.filter((link) => !link.isAdminOnly);

  return (
    <Stack gap={1}>
      {visibleLinks.map(({ title, to, icon }) => (
        <Link
          key={title}
          to={to}
          className={`p-2 nav-link ${
            title === menu ? "bg-white text-dark rounded" : ""
          }`}
          onClick={() => {
              dispatch(setSelectedCategory(null));
          }}
        >
          {icon} {title}
        </Link>
      ))}
    </Stack>
  );
};
