import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";

const store = configureStore({
    reducer: rootReducer,
    // Other middleware or enhancers can be configured here
  });
 

export default store;
