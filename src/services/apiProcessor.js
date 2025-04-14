import axios from "axios";

const authEp = import.meta.env.BACKEND_BASE_URL + "/auth"

const getAccessJWT = () => {
    // note: I am just using this name from my side if you agree, then use the same name for Access Token
    return sessionStorage.getItem("accessToken");
}

const getRefreshJWT = () => {
    return localStorage.getItem("refreshJWT")
}

export const apiProcessor = async ({ method, url, isPrivate, isRefreshToken, data, contentType = "application/json" }) => {
    // setting the headers
    const headers = {
        Authorization:
            isPrivate
                ? getAccessJWT()
                : isRefreshToken
                    ? getRefreshJWT() = false
                    : null,
        "Content-type": contentType
    }

    try {
        const response = await axios({
            method,
            url,
            data,
            headers
        })
        return response.data;
    } catch (error) {
        // if the accessToken is expired
        if (error?.response?.data?.message == "jwt expired") {
            const refreshData = apiProcessor({
                method: "get",
                url: authEp + "/renew-jwt",
                isPrivate: false,
                isRefreshToken: true
            })
            if (refreshData && refreshData?.status == "success") {
                // here the accesstoken is again set in the sessionStorage
                sessionStorage.setItem("accessToken", refreshData.token)
                // returning the actual original api processor
                return apiProcessor({
                    method,
                    data,
                    url,
                    isPrivate
                })
            } else {
                return {
                    status: "error",
                    message: "Error renewing refresh token"
                }
            }
        }
        const message = error?.response?.data?.message ?? error.message;
        return {
            status: "error",
            message,
        }
    }
}


