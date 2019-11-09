/* --- Global --- */
import {Link} from '@reach/router';
import {ColorMode, SmallStatistic} from 'core';
import {Authenticate} from '3box-ui-system';

export default props => (
  <Atom.Flex alignCenter between sx={{variant: 'regions.header'}}>
    {/* Left */}
    <Atom.Flex alignCenter>
      <Link to="/">
        <Atom.Flex alignCenter>
          <Atom.Box sx={{mr: 2}}>
            <ColorMode />
          </Atom.Box>
        </Atom.Flex>
      </Link>

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
              label: 'Jobs',
              to: '/jobs',
            },
          ]}
        />
      </Atom.Flex>
    </Atom.Flex>
    {/* Right */}
    <Atom.Flex alignCenter>
      <Stats sx={{mr: 3}} />
      <Authenticate display="avatar" />
    </Atom.Flex>
  </Atom.Flex>
);

const Stats = props => {
  return (
    <Atom.Flex alignCenter sx={props.sx}>
      <SmallStatistic label="month/gains" value="$5,000" />
      <SmallStatistic label="jobs" value="2" />
      <SmallStatistic label="gigs" value="5" />
    </Atom.Flex>
  );
};
