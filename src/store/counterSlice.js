import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
  },
});
// export const incrementAsync = (value) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(addBy(value));
//   }, 1000);
// };
export const { increment, decrement, addBy } = counterSlice.actions;
export default counterSlice.reducer;
