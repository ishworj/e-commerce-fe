import { verifyEmailAndSendOTPApi, verifyOTPApi, verifyUserApi } from "./userApi"
import { toast } from "react-toastify"

// login action
export const loginAction = () => async (dispatch) => {

}

// register action
export const registerAction = () => async (dispatch) => {

}

//verify user Action
export const verifyUserAction = ({ sessionId, token }) => async (dispatch) => {
    const pending = verifyUserApi({ sessionId, token })
    toast.promise(pending, {
        pending: "Verifying..."
    })
    const { status, message } = await pending;
    toast[status](message)
    console.log(message)
}

// verify email action
export const verifyEmailAndSendOTPAction = (email) => async (dispatch) => {

    const pending = verifyEmailAndSendOTPApi(email)

    toast.promise(pending, {
        pending: "Processing..."
    })
    const { status, message } = await pending;
    toast[status](message);
}

export const verifyOTP = (obj) => async (dispatch) => {
    const pending = verifyOTPApi(obj);
    toast.promise(pending, { pending: "Verifying OTP..." })
    const { message, status } = await pending;
    toast[status](message);
}
// Update Password action
export const updatePwAction = () => async (dispatch) => {

}