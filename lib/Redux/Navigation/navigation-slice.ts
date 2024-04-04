import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
	value: false,
};

export const navigationSlice = createSlice({
	name: "navigation",
	initialState,
	reducers: {
		openDrawer: (state) => {
			state.value = !state.value;
		},
		closeDrawer: (state) => {
			state.value = true;
		},
	},
});

export const { openDrawer, closeDrawer } = navigationSlice.actions;
export default navigationSlice.reducer;
export const selectStateDrawer = (state: RootState) => state.navigation.value;
