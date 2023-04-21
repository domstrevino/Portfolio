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
			<div className="homepage-body">
				{/*<h1>Welcome, {this.state.UserName}!</h1>*/}
				&nbsp;
				<section>
					<div className="author-image">
						<img src={profilePicture} alt="Profile" />
					</div>
					&nbsp;
					<h2>Dominick Trevino</h2>
					<h6 className="author-title">C# Developer</h6>
				</section>

				<section>
					<div className="terminal">
						<div className="terminal-title">Command Prompt</div>

						<div className="terminal-body">
							<div className="terminal-text">
								<span>Dominick's Portfolio [Version 1.0.0]</span>
								<p>All Rights reserved.</p>
								<span>C:\Users\Dominick&gt;help</span>
								<p>
									<div>
										<span className="terminal-command">RESUME</span>Dominick's resume.
									</div>
									<div>
										<span className="terminal-command">PROJECTS</span>Dominick's projects.
									</div>
									<div>
										<span className="terminal-command">LINKEDIN</span>Dominick's LinkedIn.
									</div>
									<div>
										<span className="terminal-command">GITHUB</span>Dominick's GitHub.
									</div>
									<div>
										<span className="terminal-command">CONTACT</span>Dominick's contact information.
									</div>
								</p>
								<div className="terminal-input">
									<label htmlFor="text">C:\Users\Dominick&gt;</label>
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
