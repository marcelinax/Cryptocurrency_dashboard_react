import React, { useState } from 'react';
import CryptocurrencyDashboardCoinTile from './CryptocurrencyDashboardCoinTile';
import CryptocurrencyDashboardMarketTrendTile from './CryptocurrencyDashboardMarketTrendTile';
import CryptocurrencyDashboardQuickTransferTile from './CryptocurrencyDashboardQuickTransferTile';
import CryptocurrencyDashboardProfitTile from './CryptocurrencyDashboardProfitTile';

const CryptocurrencyDashboard = ({ cryptocurrencies }) => {

	const [isTransfered, setIsTransfered] = useState(false);

	const renderCoinTiles = () => {
		return cryptocurrencies.length > 0 ? cryptocurrencies.map(cryptocurrency => (
			<CryptocurrencyDashboardCoinTile
				id={cryptocurrency.id}
				currency={cryptocurrency.symbol}
				percentages={cryptocurrency.changePercent24Hr}
				rank={cryptocurrency.rank}/>)) : null;

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
				<div className={'cryptocurrency-dashboard-main-top'}>
					<div className={'cryptocurrency-dashboard-main-top-bilboard-tile'} style={{ backgroundImage: `url("/media/main.png")` }}/>
					<div className={'cryptocurrency-dashboard-main-top-bilboard-tile'} style={{ backgroundImage: `url("/media/Group13.jpg")`, border: 'none' }}/>
					{/*<CryptocurrencyDashboardCoinChartTile cryptocurrencies={cryptocurrencies}/>*/}
				</div>
				<div className={'cryptocurrency-dashboard-main-coin-tiles-box'}>
					{renderCoinTiles()}
				</div>
				<div className={'cryptocurrency-dashboard-main-bottom'}>
					<div className={'cryptocurrency-dashboard-main-bottom-bilboard-tile'} style={{ backgroundImage: `url("/media/MarketOverview.jpg")` }}/>
					{/*<CryptocurrencyDashboardMarketOverivewTile/>*/}
					<CryptocurrencyDashboardQuickTransferTile setIsTransfered={setIsTransfered}/>
					{isTransfered ? <CryptocurrencyDashboardProfitTile cryptocurrencies={cryptocurrencies}/> : null}
					<CryptocurrencyDashboardMarketTrendTile cryptocurrencies={cryptocurrencies}/>
				</div>

			</div>
		</div>
	);
};

export default CryptocurrencyDashboard;