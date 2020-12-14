import React from 'react'
import { Info, Chart, CountryPicker } from './components'
import './App.css'
import { fetchData } from './api'
import image from './images/image.png';

class App extends React.Component {
	state = {
		data: {},
		country: '',
	}

	async componentDidMount() {
		const data = await fetchData();

		this.setState({ data });
	}

	handleCountryChange = async (country) => {
		const data = await fetchData(country);

		this.setState({ data, country: country });
	}

	render() {
		const { data, country } = this.state;

		return (
			<div className="container">
				<img className="image" src={image} alt="COVID-19" />
				<Info data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;

// function App() {
// 	const [data, setData] = React.useState([])
// 	const [country, setCountry] = React.useState('')

// 	React.useEffect(() => {
// 		async function parseData() {
// 			const response = await fetchData()
// 			setData(response)
// 		}
// 		parseData()
// 	}, [])

// 	handleCountryChange = async (country) => {
// 		const data = await fetchData(country)

// 		setCountry(data, country)
// 	}
// 	return (
// 		<div className="container">
// 			<img className="image" src={image} alt="COVID-19" />
// 			<Info data={data} />
// 			<CountryPicker handleCountryChange={handleCountryChange} />
// 			<Chart data={data} country={country} />
// 		</div>
// 	);
// }

// export default App;
