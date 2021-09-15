import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptocurrencyDashboardCoinChartTile = ({ cryptocurrencies }) => {

	const [chartData, setChartData] = useState([]);
	const [selectedCryptocurrency, setSelectedCryptocurrency] = useState('');

	const handleSelectedCryptocurrencyInput = (e) => {
		setSelectedCryptocurrency(e.target.value);
	};


	const getHistoryData = async (id) => {
		const res = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=m1&start=${Date.now() - (5 * 60 * 1000)}&end=${Date.now()}`);
		setChartData(res.data.data);
	};

	const getChartData = () => {
		return {
			labels: chartData.map((_, index) => index),
			datasets: [
				{
					label: null,
					data: chartData.map(i => i.priceUsd),
					fill: false,
					backgroundColor: 'transparent',
					pointBorderWidth: 0,
					borderColor: '#D53AFB',
				}
			]
		};
	};

	useEffect(() => {
			getHistoryData(selectedCryptocurrency);
		}, [selectedCryptocurrency]
	);

	const renderOptions = () => {
		return cryptocurrencies.map(cryptocurrency => (
			<option value={cryptocurrency.id}>{cryptocurrency.symbol}/USD</option>
		));
	};

	return (
		<div className={'cryptocurrency-dashboard-coin-chart-tile cryptocurrency-dashboard-tile'}>
			<div className={'cryptocurrency-dashboard-coin-chart-tile-top'}>
				<select onChange={handleSelectedCryptocurrencyInput} value={selectedCryptocurrency}>
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