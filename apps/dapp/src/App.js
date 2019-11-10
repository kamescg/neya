/**
 * @function Application
 * @version 0.0.1
 * @description Application
 */

/* --- Local --- */
import './assets/App.css';
import './assets/index.css';
import {Router} from '@reach/router';
import Providers from './providers';

import {
	Bank,
	Earn,
	Home,
	Create,
	Dashboard,
	Profile,
	Search,
	Chat,
	Authentication,
} from './pages';

import DeveloperProfile from './pages/DeveloperProfile';
import Content from './content';

/* --- Component --- */
export default () => (
	<Providers>
		<Router width="100%">
			<Home path="/" />
			<Dashboard path="/dashboard" />

			<Bank path="/bank" />
			<Earn path="/earn" />
			<Earn path="/gigs" />
			<Earn path="/jobs" />
			<Authentication path="/authentication" />

			<Create path="/create" />

			<Chat path="/chat" />
			<Search path="/search" />
			<DeveloperProfile path="/profile" />
			<Content path="/*" />
		</Router>
	</Providers>
);
