import React from 'react';

const CryptocurrencyDashboardMenu = () => {
	return (
		<div className={'cryptocurrency-dashboard-menu'}>
			<img src={'/media/logo.svg'}/>
			<div className={'cryptocurrency-dashboard-menu-buttons'}>
				<button>
					<img src={'/media/Home.svg'}/>
				</button>
				<button>
					<img src={'/media/Graph.svg'}/>
				</button>
				<button>
					<img src={'/media/Bag 2.svg'}/>
				</button>
				<button>
					<img src={'/media/Setting.svg'}/>
				</button>
			</div>
			<button className={'bottom-btn'}><img src={'/media/Logout.svg'}/></button>
		</div>
	);
};

export default CryptocurrencyDashboardMenu;