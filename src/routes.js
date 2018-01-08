import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Home, Portfolio, Navigation, Signup } from './features';
import { history } from './store/index';

export default () => (
	<ConnectedRouter history={history}>
		<Router>
			<Fragment>
				<Navigation />
				<Route exact path="/" component={Home} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/signup" component={Signup} />
			</Fragment>
		</Router>
	</ConnectedRouter>
);
