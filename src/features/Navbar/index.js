import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Search } from '../../components';

const Navigation = props => (
	<Navbar inverse collapseOnSelect>
		<Nav>
			<LinkContainer to="/">
				<NavItem>Home</NavItem>
			</LinkContainer>
			<LinkContainer to="/portfolio">
				<NavItem>Portfolio</NavItem>
			</LinkContainer>
			<LinkContainer to="/login">
				<NavItem>Log In</NavItem>
			</LinkContainer>
			<LinkContainer to="/signup">
				<NavItem>Sign Up</NavItem>
			</LinkContainer>
		</Nav>
		<Navbar.Form pullRight>
			<Search onEnter={() => {}} />
		</Navbar.Form>
	</Navbar>
);

function mapStateToProps(state) {
	return {};
}
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
