import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
	value: true,
	currentPage: "Cardápio",
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
		pageCurrent: (state, action) => {
			state.currentPage = action.payload;
		},
	},
});

export const { openDrawer, closeDrawer, pageCurrent } = navigationSlice.actions;
export default navigationSlice.reducer;
export const selectStateDrawer = (state: RootState) => state.navigation.value;
export const namePage = (state: RootState) => state.navigation.currentPage;
