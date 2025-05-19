import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { verifyPaymentSession } from "../../features/payment/PaymentAxios";
import { makePaymentAction } from "../../features/payment/PaymentActions";
import { toast } from "react-toastify";

const PaymentResult = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get("session_id");
  const isSuccessParam = searchParams.get("success");

  const [isVerified, setIsVerified] = useState(null);
  const [status, setStatus] = useState("");

  const handleCheckoutAction = async () => {
    try {
      const data = await makePaymentAction();
      console.log(data);
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
        setIsVerified(false);
        return;
      }

      try {
        const data = await verifyPaymentSession(sessionId); // ✅ custom axios wrapper
        setIsVerified(data.verified);
        setStatus(data.status);
      } catch (err) {
        setIsVerified(false);
      }
    };

    verify();
  }, [sessionId]);

  if (isVerified === null)
    return <p className="text-center mt-20">Verifying payment...</p>;

  if (isVerified && isSuccessParam === "true") {
    return (
      <div className="text-center mt-20">
        <h2 className="text-3xl text-green-600">
          🎉 Thank you for your purchase!
        </h2>
        <p className="mt-4 text-gray-600">Your payment was successful.</p>
        <button
          className="mt-6 px-4 py-2 bg-black text-white rounded"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl text-red-600">❌ Payment Failed or Canceled</h2>
      <p className="mt-4 text-gray-600">
        Payment status: {status || "unknown"}
      </p>
      <button
        className="mt-6 px-4 py-2 bg-black text-white rounded"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
      <button
        className="mt-6 px-4 py-2 bg-black text-white rounded"
        onClick={handleCheckoutAction}
      >
        Try Again
      </button>
    </div>
  );
};

export default PaymentResult;
