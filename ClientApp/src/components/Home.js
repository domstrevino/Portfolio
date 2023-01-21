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
		this.GetUserName();
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
					<h6 className="author-title">
						C# Developer at Huntington Bank
					</h6>

					{/* INSERT SVG FOR GITHUB AND LINKEDIN
					INSERT LINKS TO GITHUB AND LINKEDIN */}
				</section>
				<section></section>
			</div>
		);
	}

	async GetUserName() {
		const response = await fetch('information');
		const data = await response.text();
		this.setState({ UserName: data });
	}
}
