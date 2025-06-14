import { apiProcessor } from "../../services/apiProcessor"

const URL = import.meta.env.VITE_BACKEND_BASE_URL + "/review"
export const createReviewApi = (obj) => {
    return apiProcessor({
        method: "post",
        url: URL,
        isPrivate: true,
        data: obj
    })
}
export const getAllReviewApi = () => {
    return apiProcessor({
        method: "get",
        url: URL + "/admin",
        isPrivate: true
    })
}
export const getPubReviewApi = () => {
    return apiProcessor({
        method: "get",
        url: URL
    })
}