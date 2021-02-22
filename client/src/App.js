import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Login from './components/login';
function App() {

	return (
		<Router>


			<Route path="/login" exact component={Login} />


		</Router>
	);
}

export default App;
