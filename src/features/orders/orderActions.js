import { toast } from "react-toastify";
import { deleteOrderApi, deleteOrderItemApi, getAllOrders, getOrder, updateOrder } from "./orderAxios"
import { setOrders } from "./orderSlice";


export const getOrderAction = () => async (dispatch) => {
    const pending = getOrder();

    const { status, message, orders } = await pending;
    if (status === "success") { dispatch(setOrders(orders.docs)) };
}

export const getAdminOrderAction = () => async (dispatch, getState) => {
    const page = getState().orderInfo.currentPage
    const pending = getAllOrders(page);
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



//  these things need to be done in BE
// 1. I need to add the email servers in each of these actions.
//  - updated the orders
//  - cancelled the orders
//  - cancelled the particular order 
