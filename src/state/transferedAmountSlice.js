import { createSlice } from '@reduxjs/toolkit';

export const transferedAmountSlice = createSlice({
	name: 'transferedAmount',
	initialState: {
		amount: 0
	},
	reducers: {
		setTransferedAmount: (state, action) => {
			const { amount } = action.payload;
			state.amount = amount;
		}
	}
});

export const { setTransferedAmount } = transferedAmountSlice.actions;
export default transferedAmountSlice.reducer;