import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const CryptocurrencyDashboardCoinTile = ({ id, currency, percentages, rank }) => {

	const [chartData, setChartData] = useState([]);


	const getHistoryData = async () => {
		setTimeout(async () => {
			const res = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=m1&start=${Date.now() - (5 * 60 * 1000)}&end=${Date.now()}`);
			setChartData(res.data.data);
		}, rank * 200);

	};


	const getCoinIcon = () => {
		if (rank % 2 === 0) return '/media/Coin2.svg';
		if (rank % 3 === 0) return '/media/Coin3.svg';
		else return '/media/Coin.svg';
	};

	useEffect(() => {
			getHistoryData();
		}, []
	);

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
					borderColor: rank % 2 == 0 ? '#D53AFB' : '#63EFE4',


				},
			],
		};
	};

	const getChartOptions = () => {
		return {
			plugins: {
				legend: {
					display: false
				}
			}
		};
	};

	return (
		<div className={'cryptocurrency-dashboard-tile cryptocurrency-dashboard-coin-tile'}>
			<img src={getCoinIcon()} className={'cryptocurrency-dashboard-coin-tile-coin-icon'}/>
			<div className={'cryptocurrency-dashboard-coin-tile-top'}>
				<div className={'cryptocurrency-dashboard-coin-tile-top-currency'}>
					<p>{currency}</p>

					<img src={'/media/Arrows.svg'}/>
					<p>USD</p>
				</div>
				<div className={'cryptocurrency-dashboard-coin-tile-top-difference-box'}>
					<img src={percentages > 0 ? '/media/AscendingArrow.svg' : '/media/DescendingArrow.svg'}/>
					<p style={{ color: percentages > 0 ? '#00C287' : '#E72D04' }}>{(+percentages).toFixed(2).replace('-', '')}%</p>
				</div>
			</div>
			{chartData.length > 0 ? <h5>{(+chartData[4].priceUsd).toFixed(2)}</h5> : null}


			<Line data={getChartData()} options={getChartOptions()} height={'80px'}/>
		</div>
	);
};

export default CryptocurrencyDashboardCoinTile;