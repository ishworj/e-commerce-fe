import { apiProcessor } from "../../services/apiProcessor.js";

const categoryEP = import.meta.env.VITE_BACKEND_BASE_URL + "/category";

export const getAllCategoriesApi = () => {
  const apiObj = {
    method: "get",
    url: categoryEP,
    isPrivate: false,
    isRefreshToken: false,
  };
  return apiProcessor(apiObj);
};
