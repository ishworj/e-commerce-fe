import { toast } from "react-toastify"
import { createProductApi, deleteProductApi, getAdminProductApi, getPublicProductApi, getSingleProductApi, updateProductApi } from "./productAxios"
import { setProducts, setPublicProducts, setSelectedProduct } from "./productSlice";

export const getAdminProductAction = () => async (dispatch) => {
    const pending = getAdminProductApi()
    const { status, message, products } = await pending;
    dispatch(setProducts(products))
}
export const createProductAction = (productObj) => async (dispatch) => {
    const pending = createProductApi(productObj)
    const { status, message } = await pending;
    if (status === "success") {
        dispatch(getAdminProductAction())
    }
    toast[status](message)
}
export const getPublicProductAction = () => async (dispatch) => {
    const pending = getPublicProductApi()
    const { status, message, products } = await pending;
    if (status === "success") {
        dispatch(setPublicProducts(products))
    }
}
export const getSingleProductAction = (id) => async (dispatch) => {
    const { product } = await getSingleProductApi(id)
    dispatch(setSelectedProduct(product))
}
export const deleteProductAction = () => async (dispatch) => {
    const pending = deleteProductApi();
    const { status, message } = await pending
    if (status === "success") {
        dispatch(getAdminProductAction())
        dispatch(getPublicProductAction())
    }
    toast[status](message)
}
export const updateProductAction = (updateObj) => async (dispatch) => {
    const pending = updateProductApi(updateObj)
    const { status, message } = await pending
    if (status === "success") {
        dispatch(getAdminProductAction())
        dispatch(getPublicProductAction())
    }
    toast[status](message)
}

