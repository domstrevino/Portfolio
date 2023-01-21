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
				&nbsp;
				<section className="author-card">
					<div className="image-cropper">
						<img src={profilePicture} alt="Profile" />
					</div>

					<h2>Dominick Trevino</h2>
					<h6 className="author-title">C# Developer</h6>
				</section>
				&nbsp;
				<section className="emulator">
					<div className="emulator-cropper">
						<div className="emulator-title">Command Prompt</div>

						<div className="emulator-body">
							<div className="emulator-text">
								<span>Portfolio [Version 1.0.0]</span>
								<p>All Rights reserved.</p>
								{/* <span>C:\Users\Dominick&gt;help</span>
								<p>
									LinkedIn
									<br />
									GitHub
									<br />
									Resume
									<br />
									Contact
								</p> */}
								<div className="emulator-input">
									<label htmlFor="html">
										C:\Users\Dominick&gt;cd&nbsp;
									</label>
									<input
										type="text"
										id="text"
										maxLength="10"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}

	async GetUserName() {
		const response = await fetch('information');
		const data = await response.text();
		this.setState({ UserName: data });
	}
}
