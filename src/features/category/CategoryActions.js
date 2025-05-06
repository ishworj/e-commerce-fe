import { getAllCategoriesApi } from "./CategoryAxios.js";
import { setCategories } from "./categorySlice.js";

export const getAllCategoriesAction = () => async (dispatch) => {
  const { status, categories } = await getAllCategoriesApi();
  if (status == "success") {
    dispatch(setCategories(categories));
  } else {
    toast.error(message);
  }
};
