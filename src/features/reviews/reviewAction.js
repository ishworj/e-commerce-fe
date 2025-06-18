import { toast } from "react-toastify"
import { createReviewApi, deleteReviewApi, getAllReviewApi, getPubReviewApi, updateStatusOfReviewApi } from "./reviewAxios"
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

export const updateStatusOfReviewAction = (obj) => async (dispatch) => {
    console.log(obj)
    const { status, message } = await updateStatusOfReviewApi(obj)
    if (status === "success") {
        dispatch(getAllReviewAction())
    }
    toast[status](message)
}

export const deleteReviewAction = (id) => async (dispatch) => {
    const pending = deleteReviewApi(id)

    toast.promise(pending, {
        pending: "Deleting ..."
    })
    const { status, message } = await pending
    if (status === "success") {
        dispatch(getAllReviewAction())
    }
    toast[status](message)
}