import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
import productReducer from "../features/products/productSlice.js";
import reviewReducer from "../features/reviews/reviewSlice.js";
import orderReducer from "../features/orders/orderSlice.js";
import categoryReducer from "../features/category/categorySlice.js"
import cartReducer from "../features/cart/cartSlice.js"
import loadingReducer from "../features/loading/LoadingSlice.js"

export default configureStore({
  reducer: {
    loading: loadingReducer,
    userInfo: userReducer,
    productInfo: productReducer,
    orderInfo: orderReducer,
    reviewInfo: reviewReducer,
    categoryInfo: categoryReducer,
    cartInfo: cartReducer
  },
});
