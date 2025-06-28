import {
  fetchUserApi,
  loginApi,
  logoutApi,
  refreshTokenApi,
  registerApi,
  resendVerificationLinkApi,
  updatePwApi,
  updateUserApi,
  verifyEmailAndSendOTPApi,
  verifyOTPApi,
  verifyUserApi,
} from "./userApi";
import { toast } from "react-toastify";
import { resetUser, setUser } from "./userSlice.js";

// login action
export const loginAction = (form, navigate) => async (dispatch) => {
  const pending = loginApi({ ...form });
  toast.promise(pending, {
    pending: "Logging..."
  })
  const { status, message, user, accessToken, refreshToken } = await pending;
  toast[status](message);
  if (status == "success") {
    //upddate storage session for access token
    sessionStorage.setItem("accessJWT", accessToken);
    // update local storage for refresh token
    localStorage.setItem("refreshJWT", refreshToken);
    //update the store
    dispatch(setUser(user));
    dispatch(fetchUserAction())
    console.log("navigation triggered")
    navigate("/");
  }
};

// register action
export const registerUserAction = (registerObj) => async (dispatch) => {
  const pending = registerApi(registerObj);
  toast.promise(pending, {
    pending: "Registering ... "
  });
  const { status, message, user } = await pending;
  toast[status](message);
};

//verify user Action
export const verifyUserAction = ({ sessionId, token }) =>
  async () => {
    const pending = verifyUserApi({ sessionId, token });
    console.log(sessionId, token)
    toast.promise(pending, {
      pending: "Verifying...",
    });
    const { status, message } = await pending;
    toast[status](message);
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

export const verifyOTP = ({ email, Otp }) =>
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
export const updatePwAction = ({ email, Otp, password, confirmPassword }) =>
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

//fetch user action
export const fetchUserAction = () => async (dispatch) => {
  try {
    const { foundUser } = await fetchUserApi();
    // console.log(data, 666)

    foundUser && dispatch(setUser(foundUser));
  } catch (error) {
    console.log(error);
    if (error.messgae === "jwt expired") {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("refreshJWT");
    }
    toast.error("Session expired, please login again");
  }
};

// auto login action
export const autoLogin = () => async (dispatch) => {
  const accessToken = sessionStorage.getItem("accessJWT");
  const refreshToken = localStorage.getItem("refreshJWT");

  try {
    // when access token available
    if (accessToken) {
      await dispatch(fetchUserAction());
      return;
    }
    //when theres no accessToken but refresh token available
    if (refreshToken) {
      const data = await refreshTokenApi();

      if (data?.accessToken) {
        sessionStorage.setItem("accessJWT", data.accessToken);
        await dispatch(fetchUserAction());
      }
    }
  } catch (error) {
    //remove tokens in case if autologin fail
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    toast.error("Session expired, please login again");
  }
};

// logout action 
export const logoutAction = () => async (dispatch) => {
  try {
    const pending = logoutApi();
    toast.promise(pending, {
      pending: "Logging Out..."
    })
    const { status, message } = await pending;
    if (status === "success") {
      localStorage.removeItem("refreshJWT");
      sessionStorage.removeItem("accessJWT")
      dispatch(resetUser());
      toast[status](message)
      return true;
    }
  } catch (error) {
    console.log(error?.message, 5555)
  }

}

export const updateUserAction = (obj) => async (dispatch) => {
  const { status, message } = await updateUserApi(obj);
  if (status === "success") {
    dispatch(fetchUserAction())
  }
  toast[status](message)
}

// resending the verification link 
export const resendVerificationLinkAction = (email) => async (dispatch) => {
  const pending = resendVerificationLinkApi(email)
  toast.promise(pending, {
    pending: "Sending..."
  })
  const { status, message, user } = await pending
  toast[status](message)
  if (status === "success") {
    return true
  }
}