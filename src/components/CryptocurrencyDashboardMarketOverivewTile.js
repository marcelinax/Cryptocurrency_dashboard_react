import React from 'react';

const CryptocurrencyDashboardMarketOverivewTile = () => {
	return (
		<div className={'cryptocurrency-dashboard-market-overview-tile cryptocurrency-dashboard-tile'}>
			<div className={'cryptocurrency-dashboard-market-overview-tile-top'}>
				<h4>Market Overview</h4>
				<select>
					<option value={'monthly'}>Monthly</option>
				</select>
			</div>
		</div>
	);
};

export default CryptocurrencyDashboardMarketOverivewTile;
