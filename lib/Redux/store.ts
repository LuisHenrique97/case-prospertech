import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice/counter-slice";
import cartSlice from "./CartSlice/cart-slice";
import orderSlice from "./OrderSlice/order-slice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		cart: cartSlice,
		order: orderSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
