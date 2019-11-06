/* --- Global --- */
import {
  Avatar,
  ProfileIdentity,
  ProfileDetailsOccupation,
  ProfileCover,
  ProfileImage,
} from '3box-ui-profiles';
/* --- Local --- */
import {
  ProfileIdentityName,
  ProfileIdentityDetails,
  ProfileIdentitySocial,
} from 'components/profile';
import {Profile} from 'templates';

import Kudos from './Kudos';
import Identity from './Identity';
import TipButton from './TipButton';
import Activity from './Activity';
import ActivityPreview from './ActivityPreview';
import Rank from './Rank';
import Rating from './Rating';
import RatingPreview from './RatingPreview';
import CommunityPreview from './CommunityPreview';
import KudosPreview from './KudosPreview';
import PortfolioPreview from './PortfolioPreview';

const styles = {
  // Cover Region
  cover: {
    // bg: 'paper',
    bg: 'blue',
    color: 'text',
    minHeight: 330,
  },
  coverInner: {
    color: 'white',
    flex: 1,
    width: '100%',
  },
  coverLeft: {
    flex: [1, 1, 4, 4, 3],
  },
  coverRight: {
    flex: 10,
  },

  // Main Region
  main: {
    flex: 1,
  },
  aside: {
    flex: [1, 1, 4, 4, 3],
  },

  content: {
    flex: 10,
    py: 3,
    px: 4,
  },

  // Cover Content
  name: {
    fontSize: 6,
  },

  // Main Content
  card: {
    p: 4,
    mt: -320,
    width: '100%',
  },
  cardCover: {
    bg: 'blue',
    color: 'white',
    height: 200,
    borderRadius: '10px 10px 0 0',
    overflow: 'hidden',
    width: '100%',
  },
  coverPhoto: {
    opacity: 0.5,
  },
  cardMain: {
    bg: 'white',
    boxShadow: 0,
    p: 3,
  },
  cardFooter: {},
  cardIdentity: {
    fontSize: 2,
    mb: 2,
    mt: 2,
  },
  cardOccupation: {
    fontSize: 0,
    fontWeight: 400,
  },

  developerSummary: {
    bg: 'smoke',
    borderRadius: 10,
    p: 3,
  },
  gem: {
    maxWidth: 25,
  },
};

const SearchView = props => (
  <Profile>
    {/* Showcase */}
    <Atom.Flex sx={styles.cover}>
      <ProfileCover sx={{opacity: 0.52}} ratio={0.3} />
      <Atom.Flex sx={styles.coverInner}>
        {/* Left */}
        <Atom.Flex sx={styles.coverLeft}></Atom.Flex>
        {/* Right */}
        <Atom.Flex sx={styles.coverRight}>
          <Kudos />
          <Identity
            sx={styles.name}
            sxOccupation={{
              fontWeight: 400,
            }}
          />
          <Atom.Absolute sx={{bottom: 0, right: 0, m: 3}}>
            <Rating />
          </Atom.Absolute>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Flex>

    {/* Main */}
    <Atom.Flex sx={styles.main}>
      <Atom.Flex sx={styles.aside}>
        {/* User Card */}
        <Atom.Flex column sx={styles.card}>
          <TipButton />
          <Atom.Flex center column sx={styles.cardCover}>
            <ProfileCover sx={styles.coverPhoto} ratio={0.3} />

            <Avatar sx={{width: 100, height: 100}} />
            <ProfileIdentity sx={styles.cardIdentity} />
            <ProfileDetailsOccupation sx={styles.cardOccupation} />
          </Atom.Flex>
          <Atom.Flex sx={styles.cardMain}>
            <Atom.Paragraph sx={{fontSize: 0}}>
              <Atom.Heading md heavy>
                Biography
              </Atom.Heading>
              Nullam pulvinar tortor sed turpis molestie, porttitor rutrum dolor
              pulvinar. Integer metus tellus, efficitur ultrices tempus et,
              ultricies ac augue. Duis nec tincidunt sem. Aliquam vel aliquam
              mauris. Cras eleifend fermentum gravida. Fusce rutrum tempor
              mauris, congue tincidunt enim.
            </Atom.Paragraph>
          </Atom.Flex>
          <Atom.Flex sx={styles.cardFooter}></Atom.Flex>
        </Atom.Flex>
      </Atom.Flex>

      <Atom.Flex column sx={styles.content}>
        <DeveloperSummary />
        <Activity />
      </Atom.Flex>
    </Atom.Flex>
  </Profile>
);

const DeveloperSummary = props => {
  return (
    <Atom.Flex alignCenter sx={styles.developerSummary}>
      <ActivityPreview sx={{mx: 3}} />
      <Rank sx={{mx: 3}} />
      <CommunityPreview sx={{mx: 3}} />
      <KudosPreview sx={{mx: 3}} />
      <PortfolioPreview sx={{mx: 3}} />
    </Atom.Flex>
  );
};

export default SearchView;
