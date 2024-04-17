import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
	isAuth: false,
	user: {
		id: null,
		name: null,
		email: null,
	},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action) {
			state.isAuth = true;
			state.user = {
				id: action.payload.id,
				name: action.payload.name,
				email: action.payload.email,
			};
		},
		logout(state) {
			state.isAuth = false;
			state.user = {
				id: null,
				name: null,
				email: null,
			};
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
export const UserAuth = (state: RootState) => state.auth;
