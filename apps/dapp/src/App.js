
/**
 * @function Application
 * @version 0.0.1
 * @description Application
 */

/* --- Local --- */
import './assets/App.css';
import './assets/index.css';
import { Router } from '@reach/router'
import Providers from './providersWithLocation'

import {
	Home,
	Profile,
	Search
} from './pages'

import DeveloperProfile from './pages/DeveloperProfile'
import Content from './content'

console.log(Search, 'SearchSearch')

/* --- Component --- */
export default () =>
<Providers>
	<Router width='100%'>
		<Home path='/' />
		<Search path='/search' />
		<DeveloperProfile path='/developer' />
		<Profile path='/profile' />
		<Content path='/*' /> 
	</Router>
</Providers>