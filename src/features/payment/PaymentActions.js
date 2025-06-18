import { toast } from "react-toastify";
import { makePaymentAxios } from "./PaymentAxios.js";

export const makePaymentAction = async () => {
  const pending = makePaymentAxios();
  toast.promise(pending, {
    pending: "Redirecting to payment page...",
  });
  const data = await pending;
  if (data.status === "success") {
    toast[data.status](data.message);

    return data;
  }
  toast[data.status](data.message);
};



//  these are in the BE
// 1. I need to add the email servers in each of these actions.
//  - after payment successful
//  - in verification of the order after verifying while creating the order 