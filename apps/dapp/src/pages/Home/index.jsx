import React, {useState, useEffect} from 'react';
import {useThemeUI} from 'theme-ui';
// import SEO from "../components/seo"
import {Site} from 'templates';
import {Card} from '@horizin/design-system-atoms';
import Waves from 'assets/images/waveDark.svg';
import {FeaturesList} from 'views';
import {useApplyStyle} from '@horizin/design-system-atoms';
import {Slides} from '@horizin/design-system-molecules';

const IndexPage = () => (
  <Site>
    <Showcase />
    <ApplicationPreview />
    <Preview />
    <Features />
  </Site>
);

export default IndexPage;

const Showcase = props => {
  return (
    <Atom.Flex sx={{bg: 'blue', gradient: 'blue', color: 'white', p: 0}}>
      <Atom.BackgroundGradient gradient="blue" ratio={1} opacity={1} />
      <Atom.BackgroundImage
        opacity={0.52}
        src="https://s.gitcoin.co/static/v2/images/header-bg.png"
        ratio={0.1}
      />
      {/* <Atom.BackgroundImage src={Waves} ratio={.01} sx={{height: '50vh'}} /> */}
      <Atom.Absolute sx={{bottom: 0, left: 0, right: 0, height: '50%'}}>
        <Atom.BackgroundImage
          src={Waves}
          ratio={0.01}
          sx={{backgroundSize: 'contain', backgroundPosition: 'right'}}
        />
      </Atom.Absolute>
      <Atom.Container>
        <Atom.Flex>
          <Atom.Flex center column sx={{flex: 4}}>
            <Atom.Box>
              <Atom.Heading giga>Jobs for Develoeprs</Atom.Heading>
              <Atom.Heading md thin>
                An Experiment to Connect Developers w/ Jobs
              </Atom.Heading>
              <Atom.Paragraph>
                Quisque velit elit, mollis vitae risus at, fermentum cursus
                erat. Integer pulvinar lobortis diam eget feugiat. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere
                cubilia Curae; Integer porta a urna eget rutrum.
              </Atom.Paragraph>
              <Atom.Flex>
                <Atom.Button white curved>
                  Search
                </Atom.Button>
                <Atom.Button white curved sx={{ml: 3}}>
                  Create Profile
                </Atom.Button>
              </Atom.Flex>
            </Atom.Box>
          </Atom.Flex>
          <Atom.Flex center column sx={{flex: 4}}>
            <Atom.Image
              maxWidth={350}
              sx={{mt: 5}}
              src="https://imgur.com/bn8Tezt.png"
            />
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

const Features = props => {
  return (
    <Atom.Box sx={{bg: 'paper', color: 'text', py: 4}}>
      <Atom.Flex center column py={[2, 2, 4]}>
        <Atom.Heading xxl heavy center>
          Connecting Developers w/ Jobs
        </Atom.Heading>
        <Atom.Heading md thin>
          ΞID Facilitates a 2-Sided Market between Talented Developers and
          Businesses{' '}
        </Atom.Heading>
      </Atom.Flex>

      <Atom.Container>
        <Atom.Flex>
          <Atom.Box sx={{flex: 1, p: 4}}>
            <Atom.Image
              maxWidth={40}
              src="https://image.flaticon.com/icons/svg/1085/1085710.svg"
            />
            <Atom.Image
              maxWidth={40}
              src="https://image.flaticon.com/icons/svg/1085/1085710.svg"
            />
            <Atom.Heading xl>Feature Focused</Atom.Heading>
            <Atom.Paragraph>
              Quisque velit elit, mollis vitae risus at, fermentum cursus erat.
              Integer pulvinar lobortis diam eget feugiat. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Integer porta a urna eget rutrum.
            </Atom.Paragraph>
          </Atom.Box>

          <Atom.Box sx={{flex: 1, p: 4}}>
            <Atom.Image
              maxWidth={40}
              src="https://image.flaticon.com/icons/svg/1029/1029183.svg"
            />
            <Atom.Heading xl>Open Source</Atom.Heading>
            <Atom.Paragraph>
              Quisque velit elit, mollis vitae risus at, fermentum cursus erat.
              Integer pulvinar lobortis diam eget feugiat. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Integer porta a urna eget rutrum.
            </Atom.Paragraph>
          </Atom.Box>

          <Atom.Box sx={{flex: 1, p: 4}}>
            <Atom.Image
              maxWidth={40}
              src="https://image.flaticon.com/icons/svg/138/138681.svg"
            />
            <Atom.Heading xl>Developer Profiles</Atom.Heading>
            <Atom.Paragraph>
              Quisque velit elit, mollis vitae risus at, fermentum cursus erat.
              Integer pulvinar lobortis diam eget feugiat. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Integer porta a urna eget rutrum.
            </Atom.Paragraph>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};

const items = [
  <Atom.Flex center column sx={{p: 1, mx: 5}}>
    <Atom.Image
      maxWidth={350}
      sx={{mt: 0}}
      src="https://imgur.com/wQ9p3qi.png"
    />
  </Atom.Flex>,
  <Atom.Flex center column sx={{p: 1, mx: 5}}>
    <Atom.Image
      maxWidth={350}
      sx={{mt: 0}}
      src="https://imgur.com/Jxi9dub.png"
    />
  </Atom.Flex>,
  <Atom.Flex center column sx={{p: 1, mx: 5}}>
    <Atom.Image
      maxWidth={350}
      sx={{mt: 0}}
      src="https://imgur.com/wQ9p3qi.png"
    />
  </Atom.Flex>,
  <Atom.Flex center column sx={{p: 1, mx: 5}}>
    <Atom.Image
      maxWidth={350}
      sx={{mt: 0}}
      src="https://imgur.com/Jxi9dub.png"
    />
  </Atom.Flex>,
];

const styles = {
  desktopPreview: {
    p: 4,
    ml: [1, 1, '-50%'],
    width: [1, 1, '150%'],
  },
};

const ApplicationPreview = props => {
  return (
    <Atom.Flex sx={{bg: 'paper', color: 'text', py: 3}}>
      <Atom.Container>
        <Atom.Flex center column sx={{my: 2}}>
          <Atom.Image
            maxWidth={90}
            src="https://image.flaticon.com/icons/svg/1161/1161388.svg"
            sx={{
              my: 4,
            }}
          />
          <Atom.Heading xxl heavy>
            A Network of Developers at Your Disposal
          </Atom.Heading>
          <Atom.Heading md thin>
            Ask for what you need and we'll use the latest in decentralized and
            machine learning to bring you the perfect match.
          </Atom.Heading>
        </Atom.Flex>
        <Atom.Flex alignCenter>
          <Atom.Flex center column sx={{flex: 6}}>
            <Atom.Box sx={styles.desktopPreview}>
              <Atom.Image
                maxWidth={1040}
                sx={{mt: 0}}
                src="https://imgur.com/at7A9cr.png"
              />
            </Atom.Box>
          </Atom.Flex>

          <Atom.Flex column sx={{flex: 4}}>
            <Atom.Box sx={{mt: 4}}>
              <Atom.Image
                maxWidth={90}
                src="https://image.flaticon.com/icons/svg/1394/1394448.svg"
              />
              <Atom.Heading xxl heavy>
                The ΞID Network
              </Atom.Heading>
              <Atom.Paragraph>
                Quisque velit elit, mollis vitae risus at, fermentum cursus
                erat. Integer pulvinar lobortis diam eget feugiat.
              </Atom.Paragraph>
              <ul>
                <li>Dynamic Search</li>
                <li>Targetted Results</li>
                <li>Actionable Next Steps</li>
              </ul>
              <Atom.Paragraph sx={{fontSize: 0}}>
                Quisque velit elit, mollis vitae risus at, fermentum cursus
                erat. Integer pulvinar lobortis diam eget feugiat. Vestibulum
                ante ipsum primis.
              </Atom.Paragraph>
            </Atom.Box>

            <Atom.Flex>
              <Atom.Button>Developers</Atom.Button>
              <Atom.Button sx={{ml: 3}}>Businesses</Atom.Button>
            </Atom.Flex>
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

const Preview = props => {
  return (
    <Atom.Flex sx={{bg: 'paper', color: 'text', py: 3, pb: 6}}>
      <Atom.Container>
        <Atom.Box>
          <Atom.Container sx={{my: 5}}>
            <Atom.Flex center column sx={{my: 2}}>
              <Atom.Image
                maxWidth={90}
                src="https://image.flaticon.com/icons/svg/1161/1161388.svg"
                sx={{
                  my: 4,
                }}
              />
              <Atom.Heading xxl heavy>
                A Network of Developers at Your Disposal
              </Atom.Heading>
              <Atom.Heading md thin>
                Ask for what you need and we'll use the latest in decentralized
                and machine learning to bring you the perfect match.
              </Atom.Heading>
            </Atom.Flex>
            <Slides items={items} />
          </Atom.Container>
        </Atom.Box>
      </Atom.Container>
    </Atom.Flex>
  );
};
