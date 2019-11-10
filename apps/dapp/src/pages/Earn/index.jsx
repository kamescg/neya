import {Dashboard} from 'templates';
import {Authenticate} from '3box-ui-system';
import Token from 'contracts/ERC20';

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
      <Atom.Box sx={styles.content}>
        <Atom.Flex between sx={actions.container}>
          <BasicAction
            title="Smart Wallet"
            subtitle="Manage your finances with a wallet designed to simplify everything."
            label="Create"
            content={<ProfileCreateModal />}
            sx={actions.dev}
          />
          <BasicAction
            title="Trading Assistant"
            subtitle="Get help discover what's happening in the markets."
            label="Launch"
            content={<ProfileCreateBank />}
            sx={actions.dev}
          />
          <BasicAction
            title="Commuinity Support"
            subtitle="Launch team developer projects and start earning together as a
          collective."
            label="Start"
            content={<ProfileCreateTeam />}
            sx={actions.dev}
          />
        </Atom.Flex>
      </Atom.Box>
    </Atom.Container>

    <Atom.Container>
      <DeployERC20 />
      <Connect
        contract={Token}
        contractName="DAI"
        address="0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
      />
      <Deploy />
    </Atom.Container>
  </Dashboard>
);

export default Profile;

const Bank = props => {
  return (
    <>
      <Atom.Flex between sx={styles.container}>
        <Statistic sx={styles.card} label="earnings" value="$20,503.12" />
        <Statistic sx={styles.card} label="net worth" value="$52,503.12" />
        <Statistic sx={styles.card} label="credit" value="920/1000" />
        <Statistic sx={styles.card} label="votes" value="22" />
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
      <Atom.Heading normal sx={{fontSize: [2, 2, 4], mb: 1}}>
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
        Earn - Quick Tasks
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

const Showcase = props => {
  return (
    <Atom.Box sx={actions.showcase}>
      <Atom.Container>
        <Atom.Flex alignCenter between>
          <Atom.Box>
            <Atom.Heading giga heavy sx={{mb: 3}}>
              Bank
            </Atom.Heading>
            <Atom.Heading md thin>
              Manage your decentralized assets with a modern smart wallet.
            </Atom.Heading>
          </Atom.Box>
          <ShowcaseActions />
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};
