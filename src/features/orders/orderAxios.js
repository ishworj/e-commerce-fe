import { apiProcessor } from "../../services/apiProcessor"
const orderUrl = import.meta.env.VITE_BACKEND_BASE_URL + "/orders";

export const createOrder = (obj) => {
    return apiProcessor({
        method: "post",
        url: orderUrl,
        data: obj,
        isPrivate: true,
    })
}

export const updateOrder = ({ _id, status }) => {
    return apiProcessor({
        method: "put",
        url: `${orderUrl}/status`,
        data: { _id, status },
        isPrivate: true,
    })
}

export const getOrder = () => {
    return apiProcessor({
        method: "get",
        url: orderUrl,
        isPrivate: true,
    })
}

// get all orders for the admin
export const getAllOrders = () => {
    return apiProcessor({
        method: "get",
        url: orderUrl + "/admin",
        isPrivate: true,
    })
}

export const deleteOrderApi = (_id) => {
    return apiProcessor({
        method: "delete",
        url: orderUrl + `/${_id}/delete`,
        isPrivate: true
    })
}