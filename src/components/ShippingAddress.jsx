import React from "react";
import { makePaymentAction } from "../features/payment/PaymentActions";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import { Button, Form } from "react-bootstrap";
import {
  addressInput,
  countryList,
} from "../assets/form-data/ShippingAddressInput";
import { updateAddressAction } from "../features/user/userAction";

const ShippingAddress = () => {
  const dispatch = useDispatch();
  const { handleOnChange, form, setForm } = useForm({});

  const { user } = useSelector((state) => state.userInfo);

  // checkout
  const handleCheckoutAction = async (mode) => {
    if (mode === "update") {
      const fullAddress = `Unit ${form.unit}/${form.street}, ${form.city}, ${form.state}, ${form.postalCode}, ${form.country}`;
      dispatch(updateAddressAction({ address: fullAddress }));
    }

    try {
      const data = await makePaymentAction();
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      toast.error("Something went wrong during checkout");
    }
  };

  return (
    <div className="d-flex w-100 justify-content-center my-5">
      <div className="row col-9 col-md-6 col-lg-5">
        <h1 className="py-2">Shipping Address</h1>
        {/* if user wants to go with existing address */}
        {user.address && (
          <>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0 border px-3 rounded">{user.address}</p>
              <button
                className="btn btn-link"
                onClick={() => handleCheckoutAction("existing")}
              >
                Existing address
              </button>
            </div>
            <b className="my-4">Or, update address</b>
          </>
        )}

        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleCheckoutAction("update");
          }}
        >
          {addressInput.map((item, index) => (
            <Form.Group className="mb-3" controlId={item.name} key={index}>
              <Form.Label>{item.label}</Form.Label>
              <Form.Control
                type={item.type}
                name={item.name}
                value={form[item.name]}
                onChange={handleOnChange}
                placeholder={item.placeholder}
                required={item.required}
              />
            </Form.Group>
          ))}
          <Form.Group className="mb-3" controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Select
              name="country"
              value={form.country}
              onChange={handleOnChange}
              required
            >
              <option value="">Select Country</option>
              {countryList.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" className="col-12">
            Update Address
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ShippingAddress;
