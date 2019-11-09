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

import {Home, Dashboard, Profile, Search, Chat, Authentication} from './pages';

import DeveloperProfile from './pages/DeveloperProfile';
import Content from './content';

/* --- Component --- */
export default () => (
	<Providers>
		<Router width="100%">
			<Dashboard path="/" />
			<Chat path="/chat" />
			<Search path="/search" />
			<Authentication path="/authentication" />
			<DeveloperProfile path="/developer" />
			<Profile path="/profile" />
			<Content path="/*" />
		</Router>
	</Providers>
);
