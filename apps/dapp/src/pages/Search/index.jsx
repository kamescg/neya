import {Search} from 'templates';
import {FormSearch, FormSearchFilters} from 'forms';
import {ProfileCardVanity, ProfileCardShowcase} from '3box-ui-profiles';
import {Slides} from '@horizin/design-system-molecules';
/* --- Styles --- */
const styles = {
  userList: {
    p: 4,
  },
};
/* --- Component --- */
const SearchView = props => (
  <Search>
    <Atom.Box
      sx={{
        bg: 'blue',
        color: 'white',
        px: 5,
        py: 5,
      }}>
      <Atom.BackgroundGradient gradient="blue" />
      <Atom.BackgroundImage
        sx={{
          opacity: 0.5,
        }}
        src="https://s.gitcoin.co/static/v2/images/header-bg.png"
        ratio={0.1}
      />
      <Atom.Heading xxl>
        Developer Search -{' '}
        <Atom.Span sx={{fontWeight: 300}}>Cerebro Connect</Atom.Span>
      </Atom.Heading>
      <Atom.Flex alignCenter between sx={{flex: 1}}>
        <Atom.Flex sx={{flex: 4, py: 3}}>
          <FormSearch />
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Box>
    <Atom.Box sx={styles.userList}>
      <Atom.Flex>
        <Atom.Flex column sx={{mx: 'unset', flex: 10, px: 4}}>
          <OptimalResults />
          <GoodResults />
          <ImmediateResponse />
        </Atom.Flex>
        <Atom.Flex sx={{bg: 'paper', color: 'text', flex: 3, p: 4}}>
          <FormSearchFilters />
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Box>
  </Search>
);

export default SearchView;

/* --- Sub-Components --- */
const OptimalResults = props => (
  <Atom.Box sx={{my: 3, ...props.sx}}>
    <Atom.Heading xxl>Optimal Skillset</Atom.Heading>
    <Atom.HorizontalRule sx={{my: 3}} />
    <Slides
      items={items}
      naturalSlideWidth={100}
      naturalSlideHeight={85}
      totalSlides={items.length}
      visibleSlides={4}
    />
  </Atom.Box>
);

const GoodResults = props => (
  <Atom.Box sx={{my: 3, ...props.sx}}>
    <Atom.Heading xxl>Good Skillset</Atom.Heading>
    <Atom.HorizontalRule sx={{my: 3}} />
    <Slides
      items={items}
      naturalSlideWidth={100}
      naturalSlideHeight={85}
      totalSlides={items.length}
      visibleSlides={4}
    />
  </Atom.Box>
);

const ImmediateResponse = props => (
  <Atom.Box sx={{my: 3, ...props.sx}}>
    <Atom.Heading xxl>Immediate Response</Atom.Heading>
    <Atom.HorizontalRule sx={{my: 3}} />
    <Slides
      items={items}
      naturalSlideWidth={100}
      naturalSlideHeight={85}
      totalSlides={items.length}
      visibleSlides={4}
    />
  </Atom.Box>
);

const items = [
  <Atom.Box sx={{m: 3}}>
    <ProfileCardVanity />
  </Atom.Box>,
  <Atom.Box sx={{m: 3}}>
    <ProfileCardVanity />
  </Atom.Box>,
  <Atom.Box sx={{m: 3}}>
    <ProfileCardVanity />
  </Atom.Box>,
  <Atom.Box sx={{m: 3}}>
    <ProfileCardVanity />
  </Atom.Box>,
  <Atom.Box sx={{m: 3}}>
    <ProfileCardVanity />
  </Atom.Box>,
  <Atom.Box sx={{m: 3}}>
    <ProfileCardVanity />
  </Atom.Box>,
  <Atom.Box sx={{m: 3}}>
    <ProfileCardVanity />
  </Atom.Box>,
  <Atom.Box sx={{m: 3}}>
    <ProfileCardVanity />
  </Atom.Box>,
];
