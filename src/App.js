import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Search from './components/search/Search';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Navbar/>
					<div className="content">
					<Switch>
						<Route path="/profile" component={Profile} />
						<Route path="/search" component={Search} />
					</Switch>
					</div>
				</div>
			</Router>
	 );
  }
}

export default App;
