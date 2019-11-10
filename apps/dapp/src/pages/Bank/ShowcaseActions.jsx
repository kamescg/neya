import {Modal} from '@horizin/design-system-organisms';
export const ShowcaseActions = props => {
  return (
    <Atom.Flex>
      <Modal content={<AccountManagementModal />}>
        <Atom.Button sx={{ml: 2, fontSize: 1}}>Account Management</Atom.Button>
      </Modal>
      <Modal content={<CurrencyConversionModal />}>
        <Atom.Button sx={{ml: 2, fontSize: 1}}>Currency Conversion</Atom.Button>
      </Modal>
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

const AccountManagementModal = props => {
  return (
    <Atom.Box card sx={modals.container}>
      <Atom.Heading xxl heavy>
        Manage Account
      </Atom.Heading>
      <Atom.Paragraph>
        Quisque pellentesque non lectus eleifend ornare. Nunc sed urna viverra,
        finibus quam mattis, efficitur elit. Proin venenatis faucibus eros, ut
        imperdiet eros tempus sed.
      </Atom.Paragraph>
    </Atom.Box>
  );
};

const CurrencyConversionModal = props => {
  return (
    <Atom.Box card sx={modals.container}>
      <Atom.Heading xxl heavy>
        Convert Currency
      </Atom.Heading>
      <Atom.Paragraph>
        Quisque pellentesque non lectus eleifend ornare. Nunc sed urna viverra,
        finibus quam mattis, efficitur elit. Proin venenatis faucibus eros, ut
        imperdiet eros tempus sed.
      </Atom.Paragraph>
    </Atom.Box>
  );
};
