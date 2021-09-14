import CryptocurrencyDashboard from './components/CryptocurrencyDashboard';
import CryptocurrencyDashboardMenu from './components/CryptocurrencyDashboardMenu';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
	const [cryptocurrencies, setCryptocurrencies] = useState([]);

	const getCryptocurrencies = () => {
		axios.get('https://api.coincap.io/v2/assets').then(res => setCryptocurrencies(res.data.data));
	};

	useEffect(() => {
		getCryptocurrencies();
	}, []);

	return (
		<div className={'App'}>
			<CryptocurrencyDashboardMenu/>
			<CryptocurrencyDashboard cryptocurrencies={cryptocurrencies}/>


		</div>
	);
}

export default App;
