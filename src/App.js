import CryptocurrencyDashboard from './components/CryptocurrencyDashboard';
import CryptocurrencyDashboardMenu from './components/CryptocurrencyDashboardMenu';
import React from 'react';


function App() {
	return (
		<div className={'App'}>
			<CryptocurrencyDashboardMenu/>
			<CryptocurrencyDashboard/>

		</div>
	);
}

export default App;
