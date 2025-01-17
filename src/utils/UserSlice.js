import { createSlice } from "@reduxjs/toolkit";
import { employees } from "../db";

const UserSlice = createSlice({
  name: "User",
  initialState: employees,
  reducers: {
    adduser: (state, action) => {
      state.push(action.payload);
    },

    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uEmployee = state.find((users) => users.id == id);
      if (uEmployee) {
        uEmployee.name = name, 
        uEmployee.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter((users) => users.id != id);
    },
  },
});

export const { adduser, updateUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
