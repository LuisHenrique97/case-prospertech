import { RootState } from "./../store";
import { IOrder } from "@/lib/models/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: [IOrder?] = [];

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		finalizeOrder(state, action) {
			state.push({
				id: action.payload.id,
				valueTotal: action.payload.valueTotal,
				quantTotal: action.payload.quantTotal,
				itemsOrder: action.payload.itemsOrder,
			});
		},
	},
});

export const { finalizeOrder } = orderSlice.actions;
export default orderSlice.reducer;
export const ViewOrders = (state: RootState) => state.order;
