import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
import productReducer from "../features/products/productSlice.js";
import reviewReducer from "../features/reviews/reviewSlice.js";
import orderReducer from "../features/orders/orderSlice.js";

export default configureStore({
  reducer: {
    userInfo: userReducer,
    productInfo: productReducer,
    orderInfo: orderReducer,
    reviewInfo: reviewReducer,
  },
});
