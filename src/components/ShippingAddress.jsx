import React from "react";
import { makePaymentAction } from "../features/payment/PaymentActions";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import { Form } from "react-bootstrap";

import { updateUserAction } from "../features/user/userAction";
import ShippingAddressForm from "./shippingAddress/ShippingAddressForm";
import { setShippingAddress } from "../features/orders/orderSlice";

const ShippingAddress = () => {
  const dispatch = useDispatch();
  const { handleOnChange, form } = useForm({});

  const { user } = useSelector((state) => state.userInfo);

  // checkout
  const handleCheckoutAction = async (mode) => {
    const fullAddress = `Unit ${form.unit}/${form.street}, ${form.city}, ${form.state}, ${form.postalCode}, ${form.country}`;
    if (mode === "update") {
      await dispatch(setShippingAddress(fullAddress));
      localStorage.setItem("shippingAddressNew", fullAddress);
      if (!user.address || user.address.length === 0) {
        dispatch(updateUserAction({ address: fullAddress }));
      }
    }
    if (mode === "existing") {
      dispatch(setShippingAddress(fullAddress));
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
        <h1 className="py-2">Add Shipping Address</h1>
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
            <b className="my-4">Or, New address</b>
          </>
        )}
        {/*  */}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleCheckoutAction("update");
          }}
        >
          <ShippingAddressForm form={form} handleOnChange={handleOnChange} />
        </Form>
      </div>
    </div>
  );
};

export default ShippingAddress;
