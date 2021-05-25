import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

type State = {
  value: number;
}

const initialState: State = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if(state.value === 0) return;
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, decrement, reset } = counterSlice.actions;
export const counterValue = (state: RootState) => state.counter.value;

export default counterSlice.reducer;