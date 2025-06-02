import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { verifyPaymentSession } from "../../features/payment/PaymentAxios";
import { makePaymentAction } from "../../features/payment/PaymentActions";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createOrderAction } from "../../features/orders/orderActions";
import { resetCart } from "../../features/cart/cartSlice";

const PaymentResult = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionId = searchParams.get("session_id");
  const isSuccessParam = searchParams.get("success");

  const [isVerified, setIsVerified] = useState(null);
  const [status, setStatus] = useState("");

  const { user } = useSelector((state) => state.userInfo);
  console.log(user.address);
  const handleCheckoutAction = async () => {
    try {
      const data = await makePaymentAction();
      console.log(data, "checkout");
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      toast.error("Something went wrong during checkout");
      console.error("Error during checkout:", error);
    }
  };

  useEffect(() => {
    const verify = async () => {
      if (!sessionId) {
        console.log("no sessopnId");
        setIsVerified(false);
        return;
      }
      const data = await verifyPaymentSession(sessionId, {
        shippingAddress: user.address,
        products: data.cart,
        totalAmount: data.cart.reduce(
          (sum, item) => sum + item.amount_total,
          0
        ),
      });

      setIsVerified(data.verified);
      setStatus(data.status);
    };

    verify();
  }, [sessionId]);

  // console.log(user, "00000");

  if (isVerified === null)
    return <p className="text-center mt-20">Verifying payment...</p>;

  if (isVerified && isSuccessParam === "true") {
    return (
      <div
        className="text-center d-flex flex-column justify-content-center align-items-center"
        style={{ height: "55vh", margin: "auto" }}
      >
        <h2 className="text-3xl text-green-600">
          🎉 Thank you for your purchase!
        </h2>
        <p className="mt-4 text-gray-600">Your payment was successful.</p>
        <button
          className="mt-6 px-4 py-2 bg-black text-white rounded col-2"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div
      className="text-center mt-20 d-flex flex-column justify-content-center align-items-center"
      style={{ height: "51vh" }}
    >
      <h2 className="text-3xl text-red-600">❌ Payment Failed or Canceled</h2>
      <p className="mt-4 text-gray-600">
        Payment status: {status || "unknown"}
      </p>
      <button
        className="m-3 px-4 py-2 bg-black text-white rounded"
        onClick={() => navigate("/")}
        style={{ width: "140px" }}
      >
        Back to Home
      </button>
      <button
        className="mt-6 px-4 py-2 bg-black text-white rounded"
        onClick={handleCheckoutAction}
        style={{ width: "140px" }}
      >
        Try Again
      </button>
    </div>
  );
};

export default PaymentResult;
