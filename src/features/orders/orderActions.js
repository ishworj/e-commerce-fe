import { toast } from "react-toastify";
import { createOrder, deleteOrderApi, deleteOrderItemApi, getAllOrders, getOrder, updateOrder } from "./orderAxios"
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
    const { status, message, orders } = await pending;
    await dispatch(setOrders(orders))
    if (status === "success") {
        return true
    }
}
export const updateOrderAction = (updateObj) => async (dispatch) => {
    const pending = updateOrder(updateObj);
    toast.promise(pending, {
        pending: "Updating..."
    })
    const { status, message } = await pending;
    if (status === "success") {
        dispatch(getAdminOrderAction());
    }
    toast[status](message);
}
export const deleteOrderAction = (_id) => async (dispatch) => {
    const pending = deleteOrderApi(_id);
    toast.promise(pending, {
        pending: "Cancelling the Order ..."
    })
    const { status, message } = await pending;
    if (status === "success") {
        dispatch(getAdminOrderAction())
        dispatch(getOrderAction())
    }
    toast[status](message);
}
export const deleteOrderItemAction = (_id, ID) => async (dispatch) => {
    const pending = deleteOrderItemApi(_id, ID);
    toast.promise(pending, {
        pending: "Deleting the Order ..."
    })
    const { status, message } = await pending;
    if (status === "success") {
        dispatch(getAdminOrderAction())
        dispatch(getOrderAction())
    }
    toast[status](message);
}