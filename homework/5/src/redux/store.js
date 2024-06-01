import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeReducer";
const store = configureStore(themeReducer);

export default store;
