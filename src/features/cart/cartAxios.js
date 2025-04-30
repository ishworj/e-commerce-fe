import { apiProcessor } from "../../services/apiProcessor"

const cartUrl = import.meta.env.VITE_BACKEND_BASE_URL + "/cart"
export const createCartApi = (_id, quantity) => {
    return apiProcessor({
        method: "post",
        url: cartUrl + "/add-to-cart",
        data: { _id, quantity },
        isPrivate: true
    })
}

export const fetchCartApi = () => {
    return apiProcessor({
        method: "get",
        url: cartUrl,
        isPrivate: true
    })
}