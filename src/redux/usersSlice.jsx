import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "İsmail Sevgi" },
    { id: "1", name: "Murat Yılmaz" },
    { id: "2", name: "Yusuf Tokmak" },
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {

    }
});

// export const { } = usersSlice.actions;
export default usersSlice.reducer;

export const selectAllUsers = (state) => state.users;