import React from 'react';
import CryptocurrencyDashboardCoinTile from './CryptocurrencyDashboardCoinTile';
import CryptocurrencyDashboardMarketTrendTile from './CryptocurrencyDashboardMarketTrendTile';

const CryptocurrencyDashboard = ({ cryptocurrencies }) => {


	const renderCoinTiles = () => {
		return cryptocurrencies.length > 0 ? cryptocurrencies.map((cryptocurrency, index) => (
					index < 4 ?
						<CryptocurrencyDashboardCoinTile
							id={cryptocurrency.id}
							currency={cryptocurrency.symbol}
							percentages={cryptocurrency.changePercent24Hr}
							price={cryptocurrency.priceUsd}
							rank={cryptocurrency.rank}/> : null
				)
			) :
			null;
	};

	return (
		<div className={'cryptocurrency-dashboard'}>
			<div className={'cryptocurrency-dashboard-top'}>
				<div className={'cryptocurrency-dashboard-top-left'}>
					<button>
						<img src={'/media/Arrow.svg'}/>
					</button>
					<p>Home</p>
				</div>
				<div className={'cryptocurrency-dashboard-top-right'}>
					<div className={'cryptocurrency-dashboard-top-right-filter-box'}>
						<input placeholder={'Search'}/>
						<img src={'/media/Union.svg'}/>
					</div>
					<div className={'cryptocurrency-dashboard-top-right-buttons'}>
						<button>
							<img src={'/media/icon.svg'}/>
						</button>
						<div className={'avatar'}>
							<img src={'/media/Avatar.svg'}/>
						</div>
					</div>
				</div>
			</div>
			<div className={'cryptocurrency-dashboard-main'}>
				<div className={'cryptocurrency-dashboard-main-coin-tiles-box'}>
					{renderCoinTiles()}
				</div>
				<CryptocurrencyDashboardMarketTrendTile cryptocurrencies={cryptocurrencies}/>
			</div>
		</div>
	);
};

export default CryptocurrencyDashboard;