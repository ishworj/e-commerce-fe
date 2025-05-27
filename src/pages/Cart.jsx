import { useSelector } from "react-redux";
import CartCard from "../components/cards/CartCard";
import { RxCross1 } from "react-icons/rx";
import { toast } from "react-toastify";
import { makePaymentAction } from "../features/payment/PaymentActions.js";

const Cart = ({ handleCart }) => {
  const { cart } = useSelector((state) => state.cartInfo);

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

  return (
    <div className="d-flex flex-column align-items-center bg-white py-3 position-relative vh-100">
      <div
        className="d-flex align-items-center justify-content-between w-100 p-2 fs-3 sticky-top bg-white row"
        style={{ height: "auto", top: 0, zIndex: 9999 }}
      >
        <div className="col-4">&nbsp;</div>
        <div className="col-4 text-center text-decoration-underline">
          MY CART
        </div>
        <button className="col-4 border-0 bg-transparent text-end">
          <RxCross1 onClick={handleCart} />
        </button>
      </div>
      <div className="mt-4" style={{ height: "auto", paddingBottom: "200px" }}>
        {cart.length != 0 ? (
          <div>
            {cart.map((item, index) => (
              <CartCard item={item} key={index} />
            ))}
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary mt-3"
                onClick={handleCheckoutAction}
              >
                Pay Now
              </button>
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            No Items added yet
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
