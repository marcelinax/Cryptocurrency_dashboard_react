import React from 'react';

const CryptocurrencyDashboardCoinChartTile = ({ cryptocurrencies }) => {

	const renderOptions = () => {
		return cryptocurrencies.map(cryptocurrency => (
			<option value={cryptocurrency.symbol}>{cryptocurrency.symbol}/USD</option>
		));
	};

	return (
		<div className={'cryptocurrency-dashboard-coin-chart-tile cryptocurrency-dashboard-tile'}>
			<div className={'cryptocurrency-dashboard-coin-chart-tile-top'}>
				<select>
					{renderOptions()}
				</select>
				<div className={'cryptocurrency-dashboard-coin-chart-tile-top-buttons'}>
					<button>1H</button>
					<button>12H</button>
					<button>1D</button>
				</div>
			</div>
		</div>
	);
};

export default CryptocurrencyDashboardCoinChartTile;