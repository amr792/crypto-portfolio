import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../../components/SignupForm';
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
function mapStateToProps(state) {
	return {};
}

Signup.propTypes = {
	userSignupRequest: PropTypes.func.isRequired
};

const mapDispatchToProps = {};
export default connect(null, { userSignupRequest })(Signup);
