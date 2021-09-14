import React from 'react';

const CryptocurrencyDashboardQuickTransferTile = () => {
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
				<input placeholder={'0.00'}/>
			</div>
			<button>
				<img src={'/media/Send.svg'}/>
				<p>Transfer Now</p>
			</button>
		</div>
	);
};

export default CryptocurrencyDashboardQuickTransferTile;