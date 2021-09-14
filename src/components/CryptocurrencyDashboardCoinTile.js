import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

const CryptocurrencyDashboardCoinTile = ({ id, currency, price, percentages, rank }) => {

	const [chartData, setChartData] = useState([]);
	const [currentPrice, setCurrentPrice] = useState([]);

	const getHistoryData = async () => {
		const res = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`);
		setChartData(res.data.data);
	};

	const getCurrentPrice = async () => {
		const res = await axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=m1`);
		setCurrentPrice(res.data.data.priceUsd);
	};

	const getCoinIcon = () => {
		if (rank % 2 === 0) return '/media/Coin2.svg';
		if (rank % 3 === 0) return '/media/Coin3.svg';
		else return '/media/Coin.svg';
	};

	useEffect(() => {
			getHistoryData();
			getCurrentPrice();
		}, []
	);

	const getChartData = () => {
		return {
			labels: chartData.map((_, index) => index),
			datasets: [
				{
					label: '#',
					data: chartData.map(i => i.priceUsd),
					fill: false,
					backgroundColor: '#D53AFB',
					borderColor: '#D53AFB',


				},
			],
		};
	};

	return (
		<div className={'cryptocurrency-dashboard-tile cryptocurrency-dashboard-coin-tile'}>
			<img src={getCoinIcon()} className={'cryptocurrency-dashboard-coin-tile-coin-icon'}/>
			<div className={'cryptocurrency-dashboard-coin-tile-top'}>
				<div className={'cryptocurrency-dashboard-coin-tile-top-currency'}>
					{/*<p>{currency}</p>*/}
					<p>{currentPrice}</p>
					<img src={'/media/Arrows.svg'}/>
					<p>USD</p>
				</div>
				<div className={'cryptocurrency-dashboard-coin-tile-top-difference-box'}>
					<img src={percentages > 0 ? '/media/AscendingArrow.svg' : '/media/DescendingArrow.svg'}/>
					<p style={{ color: percentages > 0 ? '#00C287' : '#E72D04' }}>{(+percentages).toFixed(2).replace('-', '')}%</p>
				</div>
			</div>
			<h5>{(+price).toFixed(2)}</h5>
			<Line data={getChartData()}></Line>
		</div>
	);
};

export default CryptocurrencyDashboardCoinTile;