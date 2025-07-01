import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

const BreadCrumbsAdmin = () => {
  const breadcrumbMap = {
    "/admin": "Admin",
    "/admin/adminDashboard": "Dashboard",
    "/admin/products": "Products",
    "/admin/products/new": "Add New Product",
    "/admin/products/edit/:_id": "Edit Product",
    "/admin/categories": "Categories",
    "/admin/categories/new": "Add Category",
    "/admin/orders": "Orders",
    "/admin/reviews": "Reviews",
    "/user": "User",
    "/user/account": "Account",
  };

  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((item) => item);
  console.log(pathNames);

  let itemForBreadCrumbs = [];

  pathNames.map((value, index) => {
    const link = `/${pathNames.slice(0, index + 1).join("/")}`;
    console.log(link);
    if (link === "/admin") return;
    if (link === "/user") return;
    const name = breadcrumbMap[link] || value;
    console.log(name);
    itemForBreadCrumbs.push({ title: <a href={link}>{name}</a> });
  });

  console.log(itemForBreadCrumbs, "Items");
  return <Breadcrumb items={itemForBreadCrumbs} className="pb-3" />;
};

export default BreadCrumbsAdmin;
