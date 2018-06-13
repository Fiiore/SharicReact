import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './../home/Home';
import Navbar from './../navbar/Navbar';
import Profile from './../profile/Profile';
import Search from './../search/Search';

class Main extends Component {
  render() {
	 return (
	 	<Router>
		 	<div>
				<Navbar/>
				<div className="content">
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/profile" component={Profile}/>
						<Route path="/search" component={Search} />
					</Switch>
				</div>
			</div>
		</Router>
	 );
  }
}

export default Main;
