import React from 'react';

const CryptocurrencyDashboard = () => {
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
		</div>
	);
};

export default CryptocurrencyDashboard;