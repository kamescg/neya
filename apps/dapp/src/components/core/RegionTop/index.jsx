/* --- Global --- */
import {Link} from '@reach/router';
import {ColorMode, SmallStatistic} from 'core';
import {Authenticate, Login} from '3box-ui-system';
import {SendTransaction, DeployERC20, TokenTransfer} from 'fortmatic-system';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Atom.Flex>
        <Atom.Heading sx={{mr: 3, mb: 0}}>NEYA</Atom.Heading>
        <ColorMode />
      </Atom.Flex>

      {/* Menu */}
      <Atom.Flex alignCenter ml={4}>
        <Molecule.Menu
          sx={{
            m: 2,
            mx: 3,
          }}
          items={[
            {
              label: 'Bank',
              to: '/bank',
            },
            {
              label: 'Earn',
              to: '/earn',
            },
            {
              label: 'Gigs',
              to: '/gigs',
            },
            {
              label: 'Jobs',
              to: '/jobs',
            },
            {
              label: 'Create',
              to: '/create',
            },
          ]}
        />
      </Atom.Flex>
    </Atom.Flex>
    {/* Right */}
    <Atom.Flex alignCenter>
      <Stats sx={{mr: 3}} />
      <Authenticate display="avatar" />
      {/* <Login display="avatar" /> */}
    </Atom.Flex>
  </Atom.Flex>
);

const Stats = props => {
  return (
    <Atom.Flex alignCenter sx={props.sx}>
      <SmallStatistic label="month/gains" value="$5,261.34" />
      <SmallStatistic label="jobs" value="2" />
      <SmallStatistic label="gigs" value="5" />
    </Atom.Flex>
  );
};
