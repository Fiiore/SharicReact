import React, { Component } from 'react';
import logo from './../../img/logo.png';
import './Home.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showItem: true
		};
		// this.displayProfileForm = this.displayProfileForm.bind(this);
	}

	// Function called after DOM has been done to display the edit button on mobiles
	componentDidMount() {
	}

	render() {
		return (
			<div className="homePage row">
				<div className="col-md-4 d-flex flex-column">
						{/* Profile resume */}
					<div className="profileResume user row">
						{/* Profile picture */}
						<div className="image col-sm-4">
							<img src={logo} alt="profile"/>
						</div>

                    	{/* Main */}
						<div className="col-sm-8 d-flex flex-column align-items-center justify-content-center">
							{/* Profile data */}
							<div className="d-flex flex-row align-items-center justify-content-center">
								<h3 className="name">Nombre</h3>
							</div>
							<div className="stats d-flex">
			                	<div className="box">
			                		<span className="value">523</span>
			                		<span className="parameter">Following</span>
			            		</div>
			        			<div className="box">
			        				<span className="value">1387</span>
			        				<span className="parameter">Followers</span>
			    				</div>
			    				<div className="box">
			    					<span className="value">146</span>
									<span className="parameter">Likes</span>
								</div>
							</div>
						</div>
                    </div>

					{/* Top songs list */}
					<div className="topList">
						<table>
						<tbody>
							<tr><th>Top songs list</th></tr>
							<tr><td>Song 1</td></tr>
							<tr><td>Song 2</td></tr>
							<tr><td>Song 3</td></tr>
							<tr><td>Song 4</td></tr>
							<tr><td>Song 5</td></tr>
						</tbody>
						</table>
					</div>
				</div>

				{ /* Timeline */}
				<div className="timeline"></div>
	        </div>
	 	);
	}
}

export default Home;
