import { createCartApi, fetchCartApi } from "./cartAxios"
import { setCart } from "./cartSlice"

export const createCartAction = (_id, quantity) => async (dispatch) => {
    const { response } = await createCartApi(_id, quantity)
}
export const fetchCartAction = () => async (dispatch) => {
    const { cart } = await fetchCartApi()
    dispatch(setCart(response))
}