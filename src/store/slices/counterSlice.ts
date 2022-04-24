import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CounterSlice {
  value: number;
}

const initialState: CounterSlice = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value--;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const SelectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
