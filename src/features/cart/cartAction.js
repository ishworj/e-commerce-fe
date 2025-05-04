import { toast } from "react-toastify"
import { createCartApi, fetchCartApi } from "./cartAxios"
import { setCart } from "./cartSlice"

export const createCartAction = (_id, quantity) => async (dispatch) => {
    const pending = createCartApi(_id, quantity)
    toast.promise(pending, {
        pending: "Adding item..."
    })
    const { response, status, message } = await pending
    toast[status](message)
}
export const fetchCartAction = () => async (dispatch) => {
    const { cart } = await fetchCartApi()
    dispatch(setCart(cart.cartItems))
    console.log(cart.cartItems, "CART")
}