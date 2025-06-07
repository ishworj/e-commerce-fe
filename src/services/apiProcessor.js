import axios from "axios";

const authEp = import.meta.env.VITE_BACKEND_BASE_URL + "/auth";

const getAccessJWT = () => {
  // note: I am just using this name from my side if you agree, then use the same name for Access Token
  return sessionStorage.getItem("accessJWT");
};

const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};
// api processor
export const apiProcessor = async ({
  method,
  url,
  isPrivate,
  isRefreshToken = false,
  data,
  contentType = "application/json",
  responseType = undefined,
}) => {
  // setting the headers
  const headers = {
    Authorization: isPrivate
      ? getAccessJWT()
      : isRefreshToken
        ? getRefreshJWT()
        : null,
    "Content-type": contentType,
  };

  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
      responseType
    });
    return response.data;
  } catch (error) {
    // if the accessToken is expired
    if (error?.response?.data?.message == "jwt expired") {

      const refreshData = await apiProcessor({
        method: "get",
        url: authEp + "/renew-jwt",
        isPrivate: false,
        isRefreshToken: true,

      });
      if (refreshData && refreshData?.status == "success") {
        // here the accesstoken is again set in the sessionStorage
        sessionStorage.setItem("accessJWT", refreshData.accessToken);
        // returning the actual original api processor

        // console.log("renew")
        return apiProcessor({
          method,
          data,
          url,
          isPrivate,
        });
      } else {
        return {
          status: "error",
          message: "Error renewing refresh token",
        };
      }
    }
    const message = error?.response?.data?.message ?? error.message;
    return {
      status: "error",
      message,
    };
  }
};
