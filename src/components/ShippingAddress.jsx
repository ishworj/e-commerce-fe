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
  const handleCheckoutAction = async (e) => {
    e.preventDefault();
    const fullAddress = `Unit ${form.unit}/${form.street}, ${form.city}, ${form.state}, ${form.postalCode}, ${form.country}`;
    console.log(fullAddress);
    dispatch(updateAddressAction({ address: fullAddress }));

    // try {
    //   const data = await makePaymentAction();
    //   console.log(data);
    //   if (data?.url) {
    //     window.location.href = data.url;
    //   }
    // } catch (error) {
    //   toast.error("Something went wrong during checkout");
    //   console.error("Error during checkout:", error);
    // }
  };

  return (
    <div className="d-flex w-100 justify-content-center m-5">
      <div className="row" style={{ width: "30%" }}>
        <h1 className="py-2">Shipping Address</h1>
        <Form onSubmit={handleCheckoutAction}>
          {addressInput.map((item) => (
            <Form.Group className="mb-3" controlId={item.name}>
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
            Finalise Order
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ShippingAddress;
