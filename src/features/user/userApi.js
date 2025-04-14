import { apiProcessor } from "../../services/apiProcessor"

const rootUrl = import.meta.env.VITE_BACKEND_ROOT_URL;
console.log(rootUrl, 686)
const authUrl = import.meta.env.VITE_BACKEND_BASE_URL;
// login api
export const loginApi = () => {
    return apiProcessor({
        // method:,
        // url: ,
        // isPrivate
    })
}

// register api
export const registerApi = () => {
    return apiProcessor({
        // method:,
        // url: ,
        // isPrivate
    })
}
// verify the user 
export const verifyUserApi = ({ sessionId, token }) => {
    return apiProcessor({
        method: "get",
        url: `${rootUrl}/verify-user?sessionId=${sessionId}&t=${token}`
    })
}

// verify email api
export const verifyEmailAndSendOTPApi = (email) => {
    return apiProcessor({
        method: "post",
        url: rootUrl + "/verify-user/verifyEmail",
        data: email
    })

}

export const verifyOTPApi = ({ Otp, email }) => {
    return apiProcessor({
        method: "post",
        url: `${rootUrl}/verify-user/verify-otp`,
        data: { Otp: Otp, email: email }
    })
}
// Update Password api
export const updatePwApi = () => {
    return apiProcessor({
        // method:,
        // url: ,
        // isPrivate
    })

}