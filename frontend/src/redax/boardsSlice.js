import { createSlice } from "@reduxjs/toolkit";
import { fetchBoards, addBoard, deleteBoard } from "./boardsOps";

const slice = createSlice({
  name: "boards",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoards.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchBoards.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchBoards.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addBoard.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addBoard.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      });
  },
});

export default slice.reducer;
