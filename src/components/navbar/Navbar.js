import React, { Component } from 'react';
import logo from './../../img/logo.png';
import './Navbar.css';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
	 return (
		<div className="Navbar">
			<header>
			  	<nav className="navbar navbar-expand navbar-light">
			  		<div className="container">
			  			{ /* Logo */ }
			  				<img id="logo" src={logo} alt="logo"/>

		  				<div className="justify-content-center navigator">
		  					{ /* Left Side Of Navbar */ }
		  					<ul className="navbar-nav justify-content-around">
		  				{/* PARA LINK ACTIVO: <Link className={cx(s.link, 'fa fa-dribbble', { 'activeItem': location.pathname === '/profile' }) */}
		  				{/* VARIAS CLASSNAME: className={'wrapper searchDiv ' + this.state.something} */}
		  						<li className="">
		  							<Link to="/" className={"nav-link activeItem"}>
		  								<span className="d-none d-md-block">Home</span>
		  								<span className="fas fa-home d-sm-block d-md-none"></span>
	  								</Link>
  								</li>
								<li>
									<Link to="/profile" className="nav-link">
										<span className="d-none d-md-block">Profile</span>
										<span className="far fa-user d-xs-block d-md-none"></span>
									</Link>
								</li>
								<li>
									<Link to="/search" className="nav-link">
										<span className="d-none d-md-block">Search</span>
										<span className="fas fa-search d-xs-block d-md-none"></span>
									</Link>
								</li>
							</ul>
						</div>

						{ /* Right Side Of Navbar (Configuration menu) */ }
						<ul className="navbar-nav">
							<div className="btn-group">
								<button type="button"
									className="configBtn btn btn-secondary dropdown-toggle"
									data-toggle="dropdown">
								</button>
								<div className="dropdown-menu dropdown-menu-right">
									<button className="dropdown-item" type="button">Profile</button>
									<button className="dropdown-item" type="button">Configuration</button>
									<button className="dropdown-item" type="button">Night mode</button>
									{/* <button className="dropdown-item" type="button">Link to="/login"Logout</Link></button> */ }
								</div>
							</div>
						</ul>
					</div>
				</nav>
		  </header>
		</div>
	 );
  }
}

export default Navbar;
