import { RootState } from "./../store";
import { ICart } from "@/lib/models/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: [ICart?] = [];

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addPizza(state, action) {
			state.push({
				id: action.payload.id,
				title: action.payload.title,
				description: action.payload.description,
				price: action.payload.price,
				quant: action.payload.quant,
			});
		},
	},
});

export const { addPizza } = cartSlice.actions;
export default cartSlice.reducer;
export const ViewPizzas = (state: RootState) => state.cart;
