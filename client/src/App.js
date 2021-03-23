import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Register from './components/register'
import Login from './components/login'
import Home from './components/Home'
function App() {

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/signup" exact component={Register} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
