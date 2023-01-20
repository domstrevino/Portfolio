import React, { Component } from 'react';
import './Home.css';

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
			<div>
				<h1>Welcome, {this.state.UserName}!</h1>
			</div>
		);
	}

	async populateUserName() {
		const response = await fetch('information');
		const data = await response.text();
		this.setState({ UserName: data });
	}
}
