import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from '../counter/reducer';


export const store = configureStore({
  // reducerを内包する
  reducer: {
    counter: counterReducer,
  },
});


// RootStateとDispatchの型定義 useSelector, useDispatchをするために必要
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
