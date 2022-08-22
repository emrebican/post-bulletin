import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Learning Redux-toolkit", comment: "I've heard good things about redux" },
    { id: "2", title: "Slices", comment: "The more i say slice, the more  I want pizza" }
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: (state, action) => {
            state.push(action.payload);
            // [...state, action.payload]
        }
    }
});

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts;