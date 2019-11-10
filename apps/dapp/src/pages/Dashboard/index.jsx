import {Dashboard} from 'templates';
import {QueryBountyList} from 'bounties-ui-system';
import {Authenticate} from '3box-ui-system';
import {
  FormProfileDetails,
  FormProfileIdentity,
  FormProfileSocial,
} from 'forms';
import {BasicAction} from './actions';
import styles from './styles';

const actions = {
  container: {
    px: [3, 3, 5],
    pb: [5],
    flexDirection: ['row'],
    flexWrap: 'wrap',
  },
  dev: {
    width: '30%',
  },
};

const Profile = props => (
  <Dashboard>
    <Atom.Box sx={styles.content}>
      <Atom.Flex between sx={actions.container}>
        <BasicAction
          title="Create Profile"
          subtitle="Start your decentralized identity developer profile and start earning money today."
          label="Create"
          content={<ProfileCreateModal />}
          sx={actions.dev}
        />
        <BasicAction
          title="Launch Bank"
          subtitle="Deploy a personal bank to the blockchain. Simplify basic investing
          actions."
          label="Launch"
          content={<ProfileCreateBank />}
          sx={actions.dev}
        />
        <BasicAction
          title="Build Team"
          subtitle="Launch team developer projects and start earning together as a
        collective."
          label="Start"
          content={<ProfileCreateTeam />}
          sx={actions.dev}
        />
      </Atom.Flex>
      <Bank />
      <Gigs />
      <Jobs />
    </Atom.Box>
  </Dashboard>
);

export default Profile;

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
            Jobs
          </Atom.Heading>
          <Atom.Heading md thin sx={{ml: 3, mb: 0}}>
            Available Jobs (1-3 Months)
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
            Gigs
          </Atom.Heading>
          <Atom.Heading md thin sx={{ml: 3, mb: 0}}>
            Available Jobs (1-3 Weeks)
          </Atom.Heading>
        </Atom.Flex>
      </Atom.Flex>
      <QueryBountyList sx={styles.container} platform="bounties-network" />
    </>
  );
};

const Bank = props => {
  return (
    <>
      <Atom.Flex column sx={styles.bankSection}>
        <Atom.Flex alignCenter center sx={styles.sectionHeader}>
          <Atom.Heading xxl heavy sx={{m: 0}}>
            Bank
          </Atom.Heading>
          <Atom.Heading md thin sx={{ml: 3, mb: 0}}>
            Current Balance & Assets
          </Atom.Heading>
        </Atom.Flex>
      </Atom.Flex>
      <Atom.Flex between sx={styles.container}>
        <Statistic sx={styles.card} label="earnings" value="$20,503.12" />
        <Statistic sx={styles.card} label="net worth" value="$52,503.12" />
        <Statistic sx={styles.card} label="opportunities" value="5" />
        <Statistic sx={styles.card} label="jobs" value="22" />
      </Atom.Flex>
    </>
  );
};

const Statistic = props => {
  return (
    <Atom.Flex
      card
      center
      column
      sx={{
        ...props.sx,
      }}>
      <Atom.Heading sm heavy sx={{color: 'charcoal'}}>
        {props.label}
      </Atom.Heading>
      <Atom.Heading normal sx={{fontSize: [2, 2, 4, 5]}}>
        {props.value}
      </Atom.Heading>
    </Atom.Flex>
  );
};

const modals = {
  container: {
    width: '100%',
    maxWidth: 700,
    maxHeight: 600,
    overflow: 'auto',
    p: 4,
  },
};

const ProfileCreateModal = props => {
  return (
    <Atom.Box card sx={modals.container}>
      <Atom.Heading xxl heavy>
        Create Developer Profile
      </Atom.Heading>
      <Atom.Paragraph>
        Quisque pellentesque non lectus eleifend ornare. Nunc sed urna viverra,
        finibus quam mattis, efficitur elit. Proin venenatis faucibus eros, ut
        imperdiet eros tempus sed.
      </Atom.Paragraph>
      <Atom.Heading>Login</Atom.Heading>
      <Authenticate display="avatar" />
      <Atom.Heading>Setup Person</Atom.Heading>
      <FormProfileDetails />
      <Atom.Heading>Add Details</Atom.Heading>
      <FormProfileDetails />
      <FormProfileSocial />
    </Atom.Box>
  );
};

const ProfileCreateBank = props => {
  return (
    <Atom.Box card sx={modals.container}>
      <Atom.Heading xxl heavy>
        Create Bank
      </Atom.Heading>
      <Atom.Paragraph>
        Quisque pellentesque non lectus eleifend ornare. Nunc sed urna viverra,
        finibus quam mattis, efficitur elit. Proin venenatis faucibus eros, ut
        imperdiet eros tempus sed.
      </Atom.Paragraph>
      <Atom.Button>Deploy Bank</Atom.Button>
    </Atom.Box>
  );
};

const ProfileCreateTeam = props => {
  return (
    <Atom.Box card sx={modals.container}>
      <Atom.Heading xxl heavy>
        Create Team
      </Atom.Heading>
      <Atom.Paragraph>
        Quisque pellentesque non lectus eleifend ornare. Nunc sed urna viverra,
        finibus quam mattis, efficitur elit. Proin venenatis faucibus eros, ut
        imperdiet eros tempus sed.
      </Atom.Paragraph>
      <Atom.Button>Deploy Team Bank</Atom.Button>
    </Atom.Box>
  );
};
