import {Site} from 'templates';
import {Modal} from '@horizin/design-system-organisms';
import {ChatBot} from '3box-ui-messaging';
import {SendTransaction, SignClaim, Logout} from '3box-walletconnect-sync';
import Toast from '@horizin/design-system-organisms/dist/Toast';

/* --- Styles --- */
const styles = {
  container: {
    bg: 'blue',
    color: 'white',
    minHeight: '85vh',
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
  // <Site>
  <Atom.Flex align center sx={styles.container}>
    <Atom.BackgroundGradient gradient="blue" />
    <Atom.BackgroundImage
      sx={{
        opacity: 0.5,
      }}
      src="https://images.unsplash.com/photo-1544207916-df3b3a131e35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      ratio={0.1}
    />

    <Atom.Box sx={{maxWidth: 500, width: '100%'}}>
      <Atom.Flex between sx={{flex: 1, width: '100%'}}>
        <SignClaim />
        <SendTransaction />
        <Logout />
      </Atom.Flex>
    </Atom.Box>
    {/* <ChatElements /> */}
  </Atom.Flex>
  // </Site>
);

export default SearchView;

/* --- Sub-Components --- */
// const ChatBot = props => (
//   <Atom.Box sx={styles.chatContainer}>
//     <Atom.Flex></Atom.Flex>
//   </Atom.Box>
// );
