import { getAllCategoriesApi } from "./CategoryAxios.js";
import { setCategories } from "./categorySlice.js";

export const getAllCategoriesAction = () => async (dispatch) => {
    
  const { status, categories } = await getAllCategoriesApi();
  if (status == "success") {
     console.log(categories)
    dispatch(setCategories(categories));
  }
};
