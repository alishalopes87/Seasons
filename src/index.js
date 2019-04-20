import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './spinner'


class App extends React.Component {
	constructor(props){
		super(props);

		this.state ={ 
			lat: null, 
			erroMessage: "" 
		};

	}

	componentDidMount(){

		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ erroMessage: err.message })
		);

	}

	render() {
		if(this.state.erroMessage && !this.state.lat){
			return <div>Error: {this.state.erroMessage}</div>
		}
		
		if(!this.state.erroMessage && this.state.lat){
			return <SeasonDisplay lat={this.state.lat}/>
		}

		return <Spinner message="Please accept location request" />;
	}
}

ReactDOM.render(<App/>, document.querySelector("#root"))