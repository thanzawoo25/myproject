import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface CounterState {
  isLoading: boolean;
  value: number;
  data: any;
}

const initialState: CounterState = { isLoading: false, value: 0, data: {} };

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const responseJson = await response.json();
    return responseJson;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      //before
      //state.value += 1;
      state.value += action.payload;
    },
    decrement(state) {
      state.value -= 1;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
