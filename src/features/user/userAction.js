import { updatePwApi, verifyEmailAndSendOTPApi, verifyOTPApi, verifyUserApi } from "./userApi"
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
    if (status === "success") {
        return true;
    }
}

export const verifyOTP = ({ email, Otp }) => async (dispatch) => {
    const pending = verifyOTPApi({ email, Otp });
    toast.promise(pending, { pending: "Verifying OTP..." })
    const { message, status } = await pending;
    toast[status](message);

    if (status === "success") {
        return true;
    }
}
// Update Password action
export const updatePwAction = ({ email, Otp, password, confirmPassword }) => async (dispatch) => {
    const pending = updatePwApi({ email, Otp, password, confirmPassword });
    toast.promise(pending, {
        pending: "Updating Password!"
    })

    const { status, message } = await pending;
    toast[status](message);
    console.log(status, "status")
    if (status === "success") {
        return true;
    }
}