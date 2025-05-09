import { toast } from "react-toastify";
import {
  createProductApi,
  deleteProductApi,
  getAdminProductApi,
  getPublicProductApi,
  getSingleProductApi,
  updateProductApi,
} from "./productAxios";
import {
  setProducts,
  setPublicProducts,
  setSelectedProduct,
} from "./productSlice";

export const getAdminProductAction = () => async (dispatch) => {
  const pending = getAdminProductApi();
  const { status, message, products } = await pending;
  dispatch(setProducts(products));
};
export const createProductAction = (productObj) => async (dispatch) => {
  const pending = createProductApi(productObj);
  const { status, message } = await pending;
  if (status === "success") {
    dispatch(getAdminProductAction());
  }
  toast[status](message);
  return true;
};
export const getPublicProductAction = () => async (dispatch) => {
  const pending = getPublicProductApi();
  const { status, message, products } = await pending;
  if (status === "success") {
    dispatch(setPublicProducts(products));
  }
};
export const getSingleProductAction = (id) => async (dispatch) => {
  const { product } = await getSingleProductApi(id);
  dispatch(setSelectedProduct(product));
};
export const deleteProductAction = (_id) => async (dispatch) => {
  const { status, message } = await deleteProductApi(_id);
  if (status === "success") {
    dispatch(getAdminProductAction());
    dispatch(getPublicProductAction());
  }
  toast[status](message);
};

export const updateProductAction = (id, updateObj) => async (dispatch) => {
  const pending = updateProductApi(id, updateObj);
  const { status, message } = await pending;
  if (status === "success") {
    dispatch(getAdminProductAction());
    dispatch(getPublicProductAction());
  }
  toast[status](message);
  return "success";
};
