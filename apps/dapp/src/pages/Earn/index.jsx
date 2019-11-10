import {Dashboard} from 'templates';
import {Authenticate} from '3box-ui-system';
import Token from 'contracts/ERC20';
import {QueryBountyList} from 'bounties-ui-system';

import {Connect, Deploy} from 'components/tokens';
import {DeployERC20} from 'fortmatic-system';

import {FormProfileDetails, FormProfileSocial} from 'forms';

import {BasicAction} from './actions';
import styles from './styles';
import {ShowcaseActions} from './ShowcaseActions';

const actions = {
  showcase: {
    bg: 'blue',
    color: 'white',
    gradient: 'blue',
    p: 4,
  },
  container: {
    flexDirection: ['row'],
    flexWrap: 'wrap',
  },
  dev: {
    width: '30%',
  },
};

const Profile = props => (
  <Dashboard>
    <Showcase />

    <Atom.Container>
      <Jobs />
      <Gigs />
    </Atom.Container>
  </Dashboard>
);

export default Profile;

const modals = {
  container: {
    width: '100%',
    maxWidth: 700,
    maxHeight: 600,
    overflow: 'auto',
    p: 4,
  },
};

const Showcase = props => {
  return (
    <Atom.Box sx={actions.showcase}>
      <Atom.Container>
        <Atom.Flex alignCenter between>
          <Atom.Box>
            <Atom.Heading giga heavy sx={{mb: 3}}>
              Earn Cryptocurrency
            </Atom.Heading>
            <Atom.Heading md thin>
              Get Cryptocurrency today from completing small tasks.
            </Atom.Heading>
          </Atom.Box>
          {/* <ShowcaseActions /> */}
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};

/**
 * @name Jobs
 * @description Get All Jobs
 * @param {*} props
 */
const Jobs = props => {
  return (
    <>
      <Atom.Flex column sx={styles.jobsSection}>
        <Atom.Flex alignCenter center sx={styles.sectionHeader}>
          <Atom.Heading xxl heavy sx={{m: 0}}>
            Coding & Internet
          </Atom.Heading>
          <Atom.Heading md thin sx={{ml: 3, mb: 0}}>
            520 Available Jobs
          </Atom.Heading>
        </Atom.Flex>
        <Atom.HorizontalRule sx={{my: 3}} />
      </Atom.Flex>
      <QueryBountyList sx={styles.container} platform="gitcoin" />
    </>
  );
};

/**
 * @name Gigs
 * @description Get All Jobs
 * @param {*} props
 */
const Gigs = props => {
  return (
    <>
      <Atom.Flex column sx={styles.jobsSection}>
        <Atom.Flex alignCenter center sx={styles.sectionHeader}>
          <Atom.Heading xxl heavy sx={{m: 0}}>
            All Types
          </Atom.Heading>
          <Atom.Heading md thin sx={{ml: 3, mb: 0}}>
            1376 Available Jobs
          </Atom.Heading>
        </Atom.Flex>
      </Atom.Flex>
      <QueryBountyList sx={styles.container} platform="bounties-network" />
    </>
  );
};
