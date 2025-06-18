import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

const BreadCrumbsAdmin = () => {
  const breadcrumbMap = {
    "/admin/adminDashboard": "Dashboard",
    "/admin/products": "Products",
    "/admin/products/new": "Add New Product",
    "/admin/products/edit/:_id": "Edit Product",
    "/admin/categories": "Categories",
    "/admin/edit-category/:_id": "Edit Category",
    "/admin/add-category": "Add Category",
    "/admin/orders": "Orders",
    "/admin/reviews": "Reviews",
  };

  const location = useLocation();
  const pathNames = location.pathname.split("/").filter((item) => item);
  console.log(pathNames);

  let itemForBreadCrumbs = [];

  pathNames.map((value, index) => {
    const link = `/${pathNames.slice(0, index + 1).join("/")}`;
    const name = breadcrumbMap[link] || value;
    itemForBreadCrumbs.push({ title: <a href={link}>{name}</a> });
  });

  console.log(itemForBreadCrumbs, "Items");
  return (
    <Breadcrumb
      //   items={[
      //     {
      //       title: <a href="">Home</a>,
      //     },
      //     {
      //       title: <a href="">Dashboard</a>,
      //     },
      //     {
      //       title: "An Application",
      //     },
      //   ]}
      items={itemForBreadCrumbs}
      className="pb-3"
    />
  );
};

export default BreadCrumbsAdmin;
