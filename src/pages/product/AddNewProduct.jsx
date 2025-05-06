import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { productInputs } from "../../assets/form-data/ProductInput";
import CustomInput from "../../components/custom inputs/CustomInput";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../../features/products/productActions";
const initialState = {};

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, handleOnChange } = useForm(initialState);
  const { Categories } = useSelector((state) => state.categoryInfo);
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const success = await dispatch(createProductAction(form));
    if (success) {
      navigate("/admin/products");
    }
  };
  return (
    <UserLayout pageTitle="Add New Product">
      <div>
        <Link to="/admin/products">
          <Button variant="secondary"> Back </Button>
        </Link>
      </div>
      <div className="mt-5">
        {/* form to add new products */}

        <h4 className="py-4 "> Add new Products Here </h4>
        <Form onSubmit={handleOnSubmit}>
          {productInputs?.map((input, i) => (
            <CustomInput
              key={i}
              {...input}
              onChange={handleOnChange}
            ></CustomInput>
          ))}

          {/* Category */}
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Select
              name="category"
              value={form.category}
              onChange={handleOnChange}
              required
            >
              <option value="">Select Category</option>
              {Categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.categoryName}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <div className="d-grid">
            <Button type="submit"> Submit new Product </Button>
          </div>
        </Form>
      </div>
    </UserLayout>
  );
};

export default AddNewProduct;
