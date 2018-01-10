import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../../components/signupForm';
import { userSignupRequest } from './signup.reducer';
import PropTypes from 'prop-types';

class Signup extends Component {
	render() {
		const { userSignupRequest } = this.props;
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<SignupForm userSignupRequest={userSignupRequest} />
				</div>
			</div>
		);
	}
}

const mapStateToDispatch = {
	userSignupRequest
};

Signup.propTypes = {
	userSignupRequest: PropTypes.func.isRequired
};

export default connect(null, mapStateToDispatch)(Signup);
