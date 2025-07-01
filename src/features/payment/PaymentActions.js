import { toast } from "react-toastify";
import { makePaymentAxios, verifyPaymentSession } from "./PaymentAxios.js";

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

export const verifyPaymentAction = async (sessionId, obj) => {
  const pending = verifyPaymentSession(sessionId, obj);
  toast.promise(pending, {
    pending: "Verifying the payment ...",
  });
  const data = await pending;
  console.log(data, "cation ")
  let status;
  let message;
  if (data.verified === true) {
    status = "success",
      message = "Successfully placed the order!"
  }
  if (data.verified === true) {
    toast[status](message);
    return data;
  }
  toast[status](message);
};

