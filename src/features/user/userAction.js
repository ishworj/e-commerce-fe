import {
  loginApi,
  registerApi,
  updatePwApi,
  verifyEmailAndSendOTPApi,
  verifyOTPApi,
  verifyUserApi,
} from "./userApi";
import { toast } from "react-toastify";
import { setUser } from "./userSlice";

// login action
export const loginAction = (form, navigate) => async (dispatch) => {
  const data = await loginApi({ ...form });

  if (data?.status == "success") {
    //update the store
    dispatch(setUser(data.user));

    //upddate storage session for access token
    sessionStorage.setItem("accessJWT", data.accessToken);

    // update local storage for refresh token
    localStorage.setItemy("refreshJWT", data.refreshToken);
    navigate("/");
  }
};

// register action
export const registerUserAction = (registerObj) => async (dispatch) => {
  const pending = registerApi(registerObj);
  toast.promise(pending, {
    pending: "Registering ... ",
  });

  const { status, message, user } = await pending;
  toast[status](message);
};

//verify user Action
export const verifyUserAction =
  ({ sessionId, token }) =>
  async (dispatch) => {
    const pending = verifyUserApi({ sessionId, token });
    toast.promise(pending, {
      pending: "Verifying...",
    });
    const { status, message } = await pending;
    toast[status](message);
    console.log(message);
  };

// verify email action
export const verifyEmailAndSendOTPAction = (email) => async (dispatch) => {
  const pending = verifyEmailAndSendOTPApi(email);

  toast.promise(pending, {
    pending: "Processing...",
  });
  const { status, message } = await pending;
  toast[status](message);
  if (status === "success") {
    return true;
  }
};

export const verifyOTP =
  ({ email, Otp }) =>
  async (dispatch) => {
    const pending = verifyOTPApi({ email, Otp });
    toast.promise(pending, { pending: "Verifying OTP..." });
    const { message, status } = await pending;
    toast[status](message);

    if (status === "success") {
      return true;
    }
  };
// Update Password action
export const updatePwAction =
  ({ email, Otp, password, confirmPassword }) =>
  async (dispatch) => {
    const pending = updatePwApi({ email, Otp, password, confirmPassword });
    toast.promise(pending, {
      pending: "Updating Password!",
    });

    const { status, message } = await pending;
    toast[status](message);
    console.log(status, "status");
    if (status === "success") {
      return true;
    }
  };
