import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "1",
        title: "Learning Redux-toolkit",
        comment: "I've heard good things about redux",
        date: sub(new Date(), { minutes: 10 }).toISOString()
    },
    {
        id: "2",
        title: "Slices",
        comment: "The more i say slice, the more  I want pizza",
        date: sub(new Date(), { minutes: 5 }).toISOString()
    }
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (title, comment, userId) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        comment,
                        userId,
                        date: new Date().toISOString()
                    }
                }
            }
        }
    }
});

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;

export const selectAllPosts = (state) => state.posts;