import React, { useEffect, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { setMenu } from "../../features/user/userSlice";
import { UserLayout } from "../../components/layouts/UserLayout";
import { ProductTable } from "../../components/tables/ProductTable"; // You need to create this component
import { getAdminProductAction } from "../../features/products/productActions";

const ProductList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const { products } = useSelector((state) => state.productInfo);

  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    dispatch(setMenu("Products"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAdminProductAction());
  }, [user._id]);

  useEffect(() => {
    setDisplayProducts(products);
  }, [products]);

  return (
    <UserLayout pageTitle={"Product List"}>
      <div className="text-end mb-4">
        <Link to="/admin/products/new">
          <Button variant="primary">
            <MdOutlineAddBox /> Add New Product
          </Button>
        </Link>
      </div>

      <ProductTable products={displayProducts} />
    </UserLayout>
  );
};

export default ProductList;
