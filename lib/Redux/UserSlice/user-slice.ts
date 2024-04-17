import { User } from "@/lib/models/models";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: [User?] = [];

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		registerUser(state, action) {
			state.push({
				id: action.payload.id,
				name: action.payload.name,
				email: action.payload.email,
				password: action.payload.password,
			});
		},
	},
});

export const { registerUser } = userSlice.actions;
export default userSlice.reducer;
export const UserRegister = (state: RootState) => state.user;
