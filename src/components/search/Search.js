import React, { Component } from 'react';
import logo from './../../img/logo.png';
import './Search.css';

class Search extends Component {
	constructor(props) {
		super(props);
		/*
		this.state = {
			showItem: true
		};
		*/
		this.searchUser = this.searchUser.bind(this);
	}

	searchUser(e) {
		// e.target.value
		// Buscar nickname en la base de datos y mostrarlos
		/*
		if (e es seguidor) {
			document.getElementByClassName('icon')[0].className = 'fas fa-user-minus';
		} else {
			document.getElementByClassName('icon')[0].className = 'fas fa-user-plus';
		}
		*/
	}

	render() {
		return (
			<div className="searchPage">
				{/* Search section */}
				<div className="inputSection row justify-content-center align-items-center">
					<span className="fas fa-search"></span>
					<input type="text" id="searchInput" placeholder="Search users" onChange={this.searchUser}/>
				</div>

				{/* Results section */}
				<div className="results row">
					{/* Users */}
                    <div className="user col-md-4 col-sm-12">
						<div className="row">
							{/* Profile picture */}
							<div className="image col-sm-4">
								<img src={logo} alt="profile"/>
							</div>

	                    	{/* Main */}
							<div className="col-sm-8 d-flex flex-column align-items-center justify-content-center">
								{/* Profile data */}
								<div>
								<div className="d-flex flex-row align-items-center justify-content-center">
									<h3 className="name">Nombre</h3>
									<div className="userLikes">25<span className="fas fa-heart"></span></div>
									<button type="button" className="followBtn btn btn-outline-success">
										<span className="icon fas fa-user-plus"></span>
									</button>
								</div>
									<div className="info">
										Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, dis ac netus tellus leo massa gravida, mattis suscipit ante purus malesuada pulvinar.
									</div>
								</div>
							</div>

	                    </div>
                    </div>

                    <div className="user col-md-4 col-sm-12">
						<div className="row">
							{/* Profile picture */}
							<div className="image col-sm-4">
								<img src={logo} alt="profile"/>
							</div>

	                    	{/* Main */}
							<div className="col-sm-8 d-flex flex-column align-items-center justify-content-center">
								{/* Profile data */}
								<div>
								<div className="d-flex flex-row align-items-center justify-content-center">
									<h3 className="name">Nombre</h3>
									<div className="userLikes">13<span className="fas fa-heart"></span></div>
									<button type="button" className="followBtn btn btn-outline-success">
										<span className="icon fas fa-user-plus"></span>
									</button>
								</div>
									<div className="info">
										Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, dis ac netus tellus leo massa gravida, mattis suscipit ante purus malesuada pulvinar.
									</div>
								</div>
							</div>

	                    </div>
                    </div>

                    <div className="user col-md-4 col-sm-12">
						<div className="row">
							{/* Profile picture */}
							<div className="image col-sm-4">
								<img src={logo} alt="profile"/>
							</div>

	                    	{/* Main */}
							<div className="col-sm-8 d-flex flex-column align-items-center justify-content-center">
								{/* Profile data */}
								<div>
								<div className="d-flex flex-row align-items-center justify-content-center">
									<h3 className="name">Nombre</h3>
									<div className="userLikes">143<span className="fas fa-heart"></span></div>
									<button type="button" className="followBtn btn btn-outline-success">
										<span className="icon fas fa-user-minus"></span>
									</button>
								</div>
									<div className="info">
										Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, dis ac netus tellus leo massa gravida, mattis suscipit ante purus malesuada pulvinar.
									</div>
								</div>
							</div>

	                    </div>
                    </div>

                    <div className="user col-md-4 col-sm-12">
						<div className="row">
							{/* Profile picture */}
							<div className="image col-sm-4">
								<img src={logo} alt="profile"/>
							</div>

	                    	{/* Main */}
							<div className="col-sm-8 d-flex flex-column align-items-center justify-content-center">
								{/* Profile data */}
								<div>
								<div className="d-flex flex-row align-items-center justify-content-center">
									<h3 className="name">Nombre</h3>
									<div className="userLikes">9<span className="fas fa-heart"></span></div>
									<button type="button" className="followBtn btn btn-outline-success">
										<span className="icon fas fa-user-plus"></span>
									</button>
								</div>
									<div className="info">
										Lorem ipsum dolor sit amet consectetur adipiscing elit torquent, dis ac netus tellus leo massa gravida, mattis suscipit ante purus malesuada pulvinar.
									</div>
								</div>
							</div>

	                    </div>
                    </div>
				</div>
			</div>
		);
	}
}

export default Search;
