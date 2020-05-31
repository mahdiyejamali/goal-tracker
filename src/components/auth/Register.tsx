import React, { Component } from 'react';

// Types
import { Event } from '../../ts/types/commonTypes';

class Register extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		confirmpassword: '',
		errors: {
			cognito: null,
			blankfield: false,
			passwordmatch: false,
		},
	};

	clearErrorState = () => {
		this.setState({
			errors: {
				cognito: null,
				blankfield: false,
				passwordmatch: false,
			},
		});
	};

	handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();

		// Form validation
		this.clearErrorState();
		const error = {};
		if (error) {
			this.setState({
				errors: { ...this.state.errors, ...error },
			});
		}

		// AWS Cognito integration here
	};

	onInputChange = (event: Event) => {
		const {
			target: { name, value },
		} = event;
		this.setState({
			[name]: value,
		});
		// document.getElementById(event.target.id).classList.remove('is-danger');
	};

	render() {
		return (
			<section className="section auth">
				<div className="container">
					<h1>Register</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="field">
							<p className="control">
								<input
									className="input"
									type="text"
									id="username"
									aria-describedby="userNameHelp"
									placeholder="Enter username"
									value={this.state.username}
									onChange={this.onInputChange}
								/>
							</p>
						</div>
						<div className="field">
							<p className="control has-icons-left has-icons-right">
								<input
									className="input"
									type="email"
									id="email"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									value={this.state.email}
									onChange={this.onInputChange}
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-envelope"></i>
								</span>
							</p>
						</div>
						<div className="field">
							<p className="control has-icons-left">
								<input
									className="input"
									type="password"
									id="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.onInputChange}
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-lock"></i>
								</span>
							</p>
						</div>
						<div className="field">
							<p className="control has-icons-left">
								<input
									className="input"
									type="password"
									id="confirmpassword"
									placeholder="Confirm password"
									value={this.state.confirmpassword}
									onChange={this.onInputChange}
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-lock"></i>
								</span>
							</p>
						</div>
						<div className="field">
							<p className="control">
								<a href="/forgotpassword">Forgot password?</a>
							</p>
						</div>
						<div className="field">
							<p className="control">
								<button className="button is-success">Register</button>
							</p>
						</div>
					</form>
				</div>
			</section>
		);
	}
}

export default Register;