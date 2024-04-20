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
				quant: 1,
				active: false,
				url: action.payload.url,
			});
		},
		increase(state, action) {
			const { id, quant } = action.payload;
			const hasItem = state.find((item) => item?.id === id);
			if (hasItem) {
				hasItem.quant = quant + 1;
			}
		},
		decrease(state, action) {
			const { id, quant } = action.payload;
			const hasItem = state.find((item) => item?.id === id);
			if (hasItem && hasItem.quant! > 1) {
				hasItem.quant = quant - 1;
			} else {
				state.splice(action.payload, 1);
			}
		},
		clearCart(state, action) {
			state.splice(0, state.length);
		},
	},
});

export const { addPizza, increase, decrease, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export const ViewPizzas = (state: RootState) => state.cart;
