import React, { Component } from 'react';
import './Home.css';
import picture from '../images/Dominick-Trevino.jpg';

export class Home extends Component {
	static displayName = Home.name;
	
	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.keyPress = this.keyPress.bind(this);
	}

	handleChange = (e) => {
		this.setState({ value: e.target.value });
	}

	keyPress = (e) => {
		if (e.keyCode == 13) {
			const response = document.createElement('p');
			response.id = 'response';

			switch (e.target.value) {
				case 'clear':
					const previous_blocks = document.querySelectorAll('#previous-block');
					for (var i = 0; i < previous_blocks.length; i++) {
						previous_blocks[i].remove();
					};

					document.getElementById('main-input').value = '';
					break;
				case 'help':
					response.innerHTML = 'help.';
					document.getElementById('main-block').appendChild(response);
					document.getElementById('main-input').readOnly = true;

					Home.NewCommandLine();
					break;
				case 'resume':
					response.innerHTML = 'resume.';
					document.getElementById('main-block').appendChild(response);
					document.getElementById('main-input').readOnly = true;

					Home.NewCommandLine();
					break;
				case 'projects':
					response.innerHTML = 'projects.';
					document.getElementById('main-block').appendChild(response);
					document.getElementById('main-input').readOnly = true;

					Home.NewCommandLine();
					break;
				case 'linkedin':
					response.innerHTML = 'linkedin.';
					document.getElementById('main-block').appendChild(response);
					document.getElementById('main-input').readOnly = true;

					Home.NewCommandLine();
					break;
				case 'github':
					response.innerHTML = 'github.';
					document.getElementById('main-block').appendChild(response);
					document.getElementById('main-input').readOnly = true;

					Home.NewCommandLine();
					break;
				case 'contact':
					response.innerHTML = 'contact.';
					document.getElementById('main-block').appendChild(response);
					document.getElementById('main-input').readOnly = true;

					Home.NewCommandLine();
					break;
				default:
					response.innerHTML = `'${e.target.value}' is not recognized as an internal or external command, operable program or batch file.`;
					document.getElementById('main-block').appendChild(response);
					document.getElementById('main-input').readOnly = true;

					Home.NewCommandLine();
					break;
			}
		}
	}

	render() {
		return (
			<div className="homepage-body">
				&nbsp;
				<section>
					<div className="author-image">
						<img src={picture} alt="picture" />
					</div>
					&nbsp;
					<h2>Dominick Trevino</h2>
					<h6 className="author-title">C# Developer</h6>
				</section>

				<section>
					<div className="terminal">
						<div className="terminal-title">Command Prompt</div>

						<div className="terminal-body">
							<div className="terminal-text" id = "terminal-text">
								<span>Dominick's Portfolio [Version 1.0.0]</span>
								<p>All Rights reserved.</p>
								<div id = 'main-block'>
									<div className="main-terminal-input">
										<label htmlFor="main-input">C:\Users\Dominick&gt;</label>
										<input
											type="text"
											id="main-input"
											maxLength="10"
											autoFocus='true'
											value={this.state.value}
											onKeyDown={this.keyPress}
											onChange={this.handleChange}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

Home.NewCommandLine = function () {
	//duplicate the main block
	const previous_block = document.getElementById('main-block').cloneNode(true);

	//change the identity of the duplicate block
	previous_block.id = 'previous-block';
	previous_block.firstElementChild.className = 'previous-terminal-input';
	previous_block.firstElementChild.firstElementChild.htmlFor = 'previous-input';
	previous_block.firstElementChild.lastChild.id = 'previous-input'

	//place the duplicate block before the main block
	document.getElementById('main-block').before(previous_block);

	//remove the response portion, change readonly attribute, and clear the input box
	const main_block = document.getElementById('main-block');
	main_block.lastElementChild.remove();
	main_block.firstElementChild.lastChild.readOnly = false;
	main_block.firstElementChild.lastChild.value = '';

	//scroll to focus area
	document.getElementById('main-input').scrollIntoView();
}


{/*<span>C:\Users\Dominick&gt;help</span>*/ }
{/*<div>*/ }
{/*	<div>*/ }
{/*		<span className="terminal-command">RESUME</span>Dominick's resume.*/ }
{/*	</div>*/ }
{/*	<div>*/ }
{/*		<span className="terminal-command">PROJECTS</span>Dominick's projects.*/ }
{/*	</div>*/ }
{/*	<div>*/ }
{/*		<span className="terminal-command">LINKEDIN</span>Dominick's LinkedIn.*/ }
{/*	</div>*/ }
{/*	<div>*/ }
{/*		<span className="terminal-command">GITHUB</span>Dominick's GitHub.*/ }
{/*	</div>*/ }
{/*	<div>*/ }
{/*		<span className="terminal-command">CONTACT</span>Dominick's contact information.*/ }
{/*	</div>*/ }
{/*</div>*/ }
{/*&nbsp;*/ }









//this.state = { UserName: '' };

//componentDidMount() {
//	this.GetUserName();
//}

//<h1>Welcome, {this.state.UserName}!</h1>

//async GetUserName() {
//	const response = await fetch('information');
//	const data = await response.text();
//	this.setState({ UserName: data });
//}