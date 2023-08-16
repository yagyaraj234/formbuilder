
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    
    // other reducers can be added here
  },
  // add middleware if needed
});

export default store;