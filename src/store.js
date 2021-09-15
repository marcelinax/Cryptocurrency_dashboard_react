import { configureStore } from '@reduxjs/toolkit';
import transferedAmountSlice from './state/transferedAmountSlice';

export default configureStore({
	reducer: {
		transferedAmount: transferedAmountSlice
	},
});