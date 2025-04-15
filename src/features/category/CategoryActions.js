import { setCategories } from "./categorySlice";

export const getAllCategoriesAction = async (dispatch) => {
  const { status, categories } = await getAllCategoriesApi();
  if(status=="success"){
    dispatch(setCategories(categories))
  }
};
