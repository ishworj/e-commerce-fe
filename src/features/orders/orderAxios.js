import { apiProcessor } from "../../services/apiProcessor"
const orderUrl = import.meta.env.VITE_BACKEND_BASE_URL + "/orders";

export const updateOrder = (obj) => {
    return apiProcessor({
        method: "put",
        url: `${orderUrl}`,
        data: obj,
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

export const deleteOrderItemApi = (_id, ID) => {
    return apiProcessor({
        method: "delete",
        url: orderUrl + `/${_id}/delete/${ID}`,
        isPrivate: true,
    })
}