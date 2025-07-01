import { toast } from "react-toastify";
import {
  createCartApi,
  deleteCartItemAxios,
  fetchCartApi,
  updateCartItemAxios,
} from "./cartAxios";
import { setCart } from "./cartSlice";

export const createCartAction = (_id, quantity) => async (dispatch) => {
  const pending = createCartApi(_id, quantity);
  toast.promise(pending, {
    pending: "Adding item...",
  });
  const { response, status, message } = await pending;
  console.log(status, message);
  toast[status](message);
};
export const fetchCartAction = () => async (dispatch) => {
  const { cart } = await fetchCartApi();
  dispatch(setCart(cart.cartItems));
  console.log(cart.cartItems, "CART");
};
export const deleteCartItemAction = (_id) => async (dispatch) => {
  const pending = deleteCartItemAxios(_id);
  toast.promise(pending, {
    pending: "Deleting ...",
  });
  const { status, message } = await pending;
  toast[status](message);
  if (status === "success") {
    dispatch(fetchCartAction());
  }
};
export const updateCartItemAction =
  ({ quantity, _id, totalPrice }) =>
  async (dispatch) => {
    const { status, message, response } = await updateCartItemAxios({
      quantity,
      _id,
      totalPrice,
    });
    // dispatch(fetchCartAction())
  };
