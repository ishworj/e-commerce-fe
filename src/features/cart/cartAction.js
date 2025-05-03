import { createCartApi, fetchCartApi } from "./cartAxios"
import { setCart } from "./cartSlice"

export const createCartAction = (_id, quantity) => async (dispatch) => {
    const { response } = await createCartApi(_id, quantity)
    console.log("action")
    console.log(response.cartItems)
}
export const fetchCartAction = () => async (dispatch) => {
    const { cart } = await fetchCartApi()
    dispatch(setCart(cart.cartItems))
    console.log(cart.cartItems, "CART")
}