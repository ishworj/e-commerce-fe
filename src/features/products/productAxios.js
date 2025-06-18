import { apiProcessor } from "../../services/apiProcessor";
const productEp = import.meta.env.VITE_BACKEND_BASE_URL + "/products";

export const createProductApi = (productObj) => {
  return apiProcessor({
    method: "post",
    url: productEp + "/",
    isPrivate: true,
    data: productObj,
    contentType: "multipart/form-data",
  });
};
export const getAdminProductApi = (page) => {
  return apiProcessor({
    method: "get",
    url: `${productEp}?page=${page}`,
    isPrivate: true,
  });
};
export const getPublicProductApi = (page) => {
  return apiProcessor({
    method: "get",
    url: `${productEp}/active?page=${page}`,
  });
};
export const getSingleProductApi = (id) => {
  return apiProcessor({
    method: "get",
    url: productEp + `/${id}`,
  });
};
export const deleteProductApi = (_id) => {
  return apiProcessor({
    method: "delete",
    url: `${productEp}/${_id}`,
    isPrivate: true,
  });
};

export const updateProductApi = (id, updateObj) => {
  return apiProcessor({
    method: "put",
    url: productEp + `/${id}`,
    data: updateObj,
    isPrivate: true,
    contentType: "multipart/form-data",
  });
};
