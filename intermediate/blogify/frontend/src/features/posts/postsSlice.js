import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const resp = await axios.get("http://localhost:3000/api/posts");
  return resp.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "Succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "Error";
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
