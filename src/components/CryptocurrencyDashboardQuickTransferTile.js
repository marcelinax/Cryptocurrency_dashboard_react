import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTransferedAmount } from '../state/transferedAmountSlice';

const CryptocurrencyDashboardQuickTransferTile = ({ setIsTransfered }) => {

	const [amount, setAmount] = useState('');

	const dispatch = useDispatch();

	const handleAmountInput = (e) => {
		setAmount(e.target.value);
	};


	return (
		<div className={'cryptocurrency-dashboard-quick-transfer-tile cryptocurrency-dashboard-tile'}>
			<h4>Quick Transfer</h4>
			<div className={'cryptocurrency-dashboard-quick-transfer-tile-avatars'}>
				<img src={'/media/Avatar2.svg'}/>
				<img src={'/media/Avatar3.svg'}/>
				<img src={'/media/AddAvatar.svg'}/>
			</div>
			<div className={'cryptocurrency-dashboard-quick-transfer-tile-input'}>
				<p>Amount:</p>
				<p>$</p>
				<input placeholder={'0.00'} onChange={handleAmountInput} value={amount}/>
			</div>
			<button onClick={() => {
				setIsTransfered(true);
				dispatch(setTransferedAmount({ amount }));
			}}>
				<img src={'/media/Send.svg'}/>
				<p>Transfer Now</p>
			</button>
		</div>
	);
};

export default CryptocurrencyDashboardQuickTransferTile;