import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice/counter-slice";
import cartSlice from "./CartSlice/cart-slice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		cart: cartSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
