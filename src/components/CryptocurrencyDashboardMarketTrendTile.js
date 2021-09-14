import React from 'react';

const CryptocurrencyDashboardMarketTrendTile = ({ cryptocurrencies }) => {

	const renderCurrenciesName = () => {
		return cryptocurrencies.map(cryptocurrency => (
			<div className={'cryptocurrency-name'}>
				<p>{cryptocurrency.symbol}</p>
				<p>{cryptocurrency.name}</p>
			</div>
		));
	};


	const renderCurrencies24Change = () => {
		return cryptocurrencies.map(cryptocurrency => (
			<div className={'cryptocurrency-24change'}>
				<p>{(+cryptocurrency.changePercent24Hr).toFixed(3).replace('.', ',').replace('-', '')}</p>
				<img src={cryptocurrency.changePercent24Hr > 0 ? '/media/GreenArrow.svg' : '/media/RedArrow.svg'}/>
			</div>

		));
	};

	const renderCurrenciesPrice = () => {
		return cryptocurrencies.map(cryptocurrency => (
			<p>${(+cryptocurrency.priceUsd).toFixed(2)}</p>
		));
	};

	return (
		<div className={'cryptocurrency-dashboard-market-trend-tile cryptocurrency-dashboard-tile'}>
			<h4>Market Trend</h4>
			<div className={'cryptocurrency-dashboard-market-trend-tile-currencies-info'}>
				<div className={'cryptocurrency-name-box'}>
					<label>Name</label>
					{renderCurrenciesName()}
				</div>
				<div className={'cryptocurrency-price-box'}>
					<label>Last Price</label>
					{renderCurrenciesPrice()}
				</div>
				<div className={'cryptocurrency-24change-box'}>
					<label>24h Change</label>
					{renderCurrencies24Change()}
				</div>
			</div>

		</div>
	);
};

export default CryptocurrencyDashboardMarketTrendTile;