import { toast } from "react-toastify"
import { createReviewApi, getAllReviewApi, getPubReviewApi } from "./reviewAxios"
import { setAllReview, setPubReviews } from "./reviewSlice"

export const createReviewAction = (obj) => async (dispatch) => {
    const pending = createReviewApi(obj)
    toast.promise(pending, {
        pending: "Posting..."
    })
    const { status, message } = await pending
    toast[status](message)
    if (status === "success") {
        dispatch(getAllReviewAction())
        dispatch(getPubReviewAction())
        return true
    }
}

export const getAllReviewAction = () => async (dispatch) => {
    const { status, reviews } = await getAllReviewApi()
    if (status === "success") {
        dispatch(setAllReview(reviews))
    }
}

export const getPubReviewAction = () => async (dispatch) => {
    const { status, reviews } = await getPubReviewApi()
    if (status === "success") {
        dispatch(setPubReviews(reviews))
    }
}