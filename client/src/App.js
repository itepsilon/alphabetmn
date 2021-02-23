import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './components/login';
import Header from './components/header'
import SignUp from './components/signup';

function App() {

	return (
		<div className="App">
			<Router>
				<Header/>
				<Switch>
					<Route path="/login" exact component={Login} />
					<Route path="/signup" exact component={SignUp} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
