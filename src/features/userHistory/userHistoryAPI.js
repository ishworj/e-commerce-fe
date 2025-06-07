import { apiProcessor } from "../../services/apiProcessor"

// http://localhost:9002/api/v1
const URL = import.meta.env.VITE_BACKEND_BASE_URL + "/history";

export const getUserHistory = (data) => {
    return apiProcessor({
        method: "get",
        url: URL,
        data: data
    })
}

export const createUserHistory = (data) => {
    return apiProcessor({
        method: "post",
        url: URL,
        data: data
    })
}