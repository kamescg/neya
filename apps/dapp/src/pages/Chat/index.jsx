import {Dashboard} from 'templates';
import {Modal} from '@horizin/design-system-organisms';
import {ChatBot} from '3box-ui-messaging';
import {SendTransaction, SignClaim, Logout} from '3box-walletconnect-sync';
import Toast from '@horizin/design-system-organisms/dist/Toast';

/* --- Styles --- */
const styles = {
  container: {
    bg: 'blue',
    color: 'white',
    minHeight: '90vh',
    px: 5,
    py: 5,
  },
  chatContainer: {
    bg: 'white',
    p: 6,
  },
  userList: {
    p: 4,
  },
};
/* --- Component --- */
const SearchView = props => (
  <Dashboard>
    <Atom.Flex align center sx={styles.container}>
      <Atom.BackgroundGradient gradient="blue" />
      <Atom.BackgroundImage
        sx={{
          opacity: 0.5,
        }}
        src="https://s.gitcoin.co/static/v2/images/header-bg.png"
        ratio={0.1}
      />

      <Atom.Box>
        <Atom.Flex>
          <SignClaim />
          <SendTransaction />
          <Logout />
        </Atom.Flex>
        <ChatBot />
      </Atom.Box>
      {/* <ChatElements /> */}
    </Atom.Flex>
  </Dashboard>
);

export default SearchView;

/* --- Sub-Components --- */
// const ChatBot = props => (
//   <Atom.Box sx={styles.chatContainer}>
//     <Atom.Flex></Atom.Flex>
//   </Atom.Box>
// );
