import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchBoards = createAsyncThunk(
  "boards/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/boards");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addBoard = createAsyncThunk(
  "boards/addBoards",
  async (newBoard, thunkAPI) => {
    try {
      const response = await axios.post("/boards", newBoard);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  "bords/deleteBoard",
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.delete(`/boards/${boardId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
