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
