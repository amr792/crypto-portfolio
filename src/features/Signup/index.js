import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupForm from '../../components/SignupForm';

class Signup extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-4">
					<SignupForm />
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {};
}
const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
