import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type State = {
  value: number;
}

const initialState: State = {
  value: 0,
}

export const asyncCount = (currentValue: number) => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve(currentValue +1)
    }, 3000)
  })
}

export const asyncIncrement = createAsyncThunk (
  'asyncCount',
  async (value: number) => {
    const res = await asyncCount(value);
    console.log(`res: `, res)
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    asyncIncrement: (state) => {
      asyncCount(state.value);
    }
  },
});

export default counterSlice.reducer;