import React, { Component } from 'react';
import logo from './../../img/logo.png';
import './Profile.css';
// import './profileEdit.js';
// import React router

class Profile extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    showInputElements:false,
	  };
	 }

	 editProfile(event) {
	     this.setState({
	       showInputElements:true,
	    });
	  }
	// Nombre función
	// onClick que especifique unos estilos, esos estilos se pondrán en los input para mostrarlos o no
	render() {
		return (
			<div className="d-flex justify-content-center">
				<div className="frame col-md-8 col-sm-5">
					<div className="center row">
						{/* Profile data */}
						<div className="profile col-md-10 justify-content-center">
							{/* Profile picture */}
							<div className="image">
								<img id="profileImage" src={logo} alt="profile"/>
							</div>

							{/* Name and description */}
							<div className="infoContainer row align-items-center justify-content-center clearfix">
								<div className="info">
									<h3 className="name">Nombre</h3>
									<input type="text" className="newData newName"/>
									<div className="description">Descripción</div>
									<input type="textarea" className="newData newDescription"/>
									<input type="file" className="newData newImage"/>
								</div>
								<span id="editBtn" className="fas fa-edit"></span>
		                    </div>
	                	</div>

	                	{/* Profile stadistics (Following, Followers, Likes) */}
		                <div className="stats d-flex flex-column col-md-2">
		                	<div className="box box1">
		                		<span className="value">523</span>
		                		<span className="parameter">Following</span>
		            		</div>
		        			<div className="box box2">
		        				<span className="value">1387</span>
		        				<span className="parameter">Followers</span>
		    				</div>
		    				<div className="box box3">
		    					<span className="value">146</span>
								<span className="parameter">Likes</span>
							</div>
						</div>
					</div>
				</div>
	        </div>
	 	);
	}
}

export default Profile;
