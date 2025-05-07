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
}
export const getAdminProductApi = () => {
    return apiProcessor({
        method: "get",
        url: productEp + "/",
        isPrivate: true
    })
}
export const getPublicProductApi = () => {
    return apiProcessor({
        method: "get",
        url: productEp + '/active'
    })
}
export const getSingleProductApi = (id) => {
    return apiProcessor({
        method: "get",
        url: productEp + `/${id}`
    })
}
export const deleteProductApi = () => {
    return apiProcessor({
        method: "delete",
        url: productEp + "/:id",
        isPrivate: true
    })
}
export const updateProductApi = (updateObj) => {
    return apiProcessor({
        method: "put",
        url: productEp + "/:id",
        data: updateObj,
        isPrivate: true
    })
}

