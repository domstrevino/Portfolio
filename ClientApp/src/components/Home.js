import React, { Component } from 'react';
import './Home.css';
import profilePicture from '../images/Dominick-Trevino.jpg';

export class Home extends Component {
	static displayName = Home.name;

	constructor(props) {
		super(props);
		this.state = { UserName: '' };
	}

	componentDidMount() {
		this.populateUserName();
	}

	render() {
		return (
			<div className="wrapper">
				<h1>Welcome, {this.state.UserName}!</h1>
				<section className="author-card">
					<div className="image-cropper">
						<img src={profilePicture} alt="Profile" />
					</div>

					<h2>Dominick Trevino</h2>
					<p className="author-title">
						C# Developer at Huntington Bancshares
					</p>
				</section>
			</div>
		);
	}

	async populateUserName() {
		const response = await fetch('information');
		const data = await response.text();
		this.setState({ UserName: data });
	}
}
