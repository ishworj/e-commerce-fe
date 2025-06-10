import { toast } from "react-toastify";
import { setWishlist } from "./wishlistSlice";
import { createWishlistApi, deleteWishlistApi, deleteWishlistItemApi, getWishlistApi } from "./wishlistAPI";

export const createWishlistAction = (obj) => async (dispatch) => {
    const pending = createWishlistApi(obj);
    toast.promise(pending, {
        pending: "Processing..."
    })
    const { status, message, data } = await pending;
    dispatch(getWishlistAction())
}
export const getWishlistAction = () => async (dispatch) => {
    const pending = getWishlistApi();
    toast.promise(pending, {
        pending: "Processing..."
    })
    const { status, message } = await pending;
    dispatch(setWishlist(data))
}
export const deleteWishlistItemAction = () => async (dispatch) => {
    const pending = deleteWishlistItemApi();
    toast.promise(pending, {
        pending: "Processing..."
    })
    const { status, message } = await pending;
}
export const deleteWishlistAction = () => async (dispatch) => {
    const pending = deleteWishlistApi();
    toast.promise(pending, {
        pending: "Processing..."
    })
    const { status, message } = await pending;
}