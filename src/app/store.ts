import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from '../counter/reducer';


export const store = configureStore({
  // reducerを内包する
  reducer: {
    counter: counterReducer,
  },
});
