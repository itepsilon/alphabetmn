import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Register from './components/register'
import Login from './components/login'
import Home from './components/Home'
import Header from './components/header'
import PrivatePage from './components/PrivatePage'
import PrivateRoute from './routers/privateRoute'
import { useSelector } from 'react-redux';
function App() {
	
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/login" exact component={Login} />
					<Route path="/signup" exact component={Register} />
					<PrivateRoute path="/private" exact component={PrivatePage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
