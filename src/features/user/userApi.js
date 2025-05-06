import { apiProcessor } from "../../services/apiProcessor";

const rootUrl = import.meta.env.VITE_BACKEND_ROOT_URL;
console.log(rootUrl, 686);

const authUrl = import.meta.env.VITE_BACKEND_BASE_URL + "/auth";

// login api
export const loginApi = (loginObj) => {
  return apiProcessor({
    method: "post",
    url: authUrl + "/signin",
    data: loginObj,
    isPrivate: false,
    isRefreshToken: false,
  });
};

// register api
export const registerApi = (registerObj) => {
  return apiProcessor({
    method: "post",
    url: authUrl + "/register",
    data: registerObj,
  });
};
// verify the user
export const verifyUserApi = ({ sessionId, token }) => {
  return apiProcessor({
    method: "get",
    url: `${rootUrl}/verify-user?sessionId=${sessionId}&t=${token}`,
  });
};

// verify email api
export const verifyEmailAndSendOTPApi = (email) => {
  return apiProcessor({
    method: "post",
    url: rootUrl + "/verify-user/verifyEmail",
    data: email,
  });
};

export const verifyOTPApi = ({ Otp, email }) => {
  return apiProcessor({
    method: "post",
    url: `${rootUrl}/verify-user/verify-otp`,
    data: { Otp: Otp, email: email },
  });
};
// Update Password api
export const updatePwApi = ({ email, Otp, password, confirmPassword }) => {
  return apiProcessor({
    method: "post",
    url: rootUrl + "/verify-user",
    data: {
      email: email,
      Otp: Otp,
      password: password,
      confirmPassword: confirmPassword,
    },
  });
};

// fetch user api
export const fetchUserApi = () => {
  try {
    return apiProcessor({
      method: "get",
      url: `${rootUrl}/user`,
      isPrivate: true,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// refrsh token api
export const refreshTokenApi = async () => {
  try {
    return apiProcessor({
      method: "get",
      url: rootUrl + "/renew-jwt",
      isPrivate: true,
      isRefresh: true,
    });
  } catch (error) {
    sessionStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    throw error;
  }
};
