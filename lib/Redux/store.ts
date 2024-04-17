import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice/counter-slice";
import cartSlice from "./CartSlice/cart-slice";
import orderSlice from "./OrderSlice/order-slice";
import navigationSlice from "./Navigation/navigation-slice";
import userSlice from "./UserSlice/user-slice";
import authSlice from "./AuthSlice/auth-slice";

export const store = configureStore({
	reducer: {
		counter: counterSlice,
		cart: cartSlice,
		order: orderSlice,
		navigation: navigationSlice,
		user: userSlice,
		auth: authSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
