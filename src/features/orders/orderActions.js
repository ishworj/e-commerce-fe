import { toast } from "react-toastify";
import { createOrder, getAllOrders, getOrder, updateOrder } from "./orderAxios"
import { setOrders } from "./orderSlice";

export const createOrderAction = (obj) => async (dispatch) => {
    const pending = createOrder(obj);
    toast.promise(pending, {
        pending: "Finalising your order..."
    })
    const { status, message } = await pending;
    dispatch(getOrderAction());
    toast[status](message);
    if (status === "success") {
        return true;
    }
}
export const getOrderAction = () => async (dispatch) => {
    const pending = getOrder();

    const { status, message, orders } = await pending;
    if (status === "success") { dispatch(setOrders(orders)) };
}
export const getAdminOrderAction = () => async (dispatch) => {
    const pending = getAllOrders();
    toast.promise(pending, {
        pending: "Gathering all orders..."
    })
    const { status, message, orders } = await pending;
    dispatch(setOrders(orders))
    toast[status](message);
}
export const updateOrderAction = () => async (dispatch) => {
    const pending = updateOrder();
    toast.promise(pending, {
        pending: "Updating the status of the order..."
    })
    const { status, message } = await pending;
    dispatch(getOrderAction());
    toast[status](message);
}