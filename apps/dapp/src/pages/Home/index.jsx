import React, {useState, useEffect} from 'react';
import {Site} from 'templates';
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';

import {FormJobCreate} from 'forms';

const IndexPage = () => (
  <Site>
    <Showcase />
    <Features />
  </Site>
);

export default IndexPage;

const Showcase = props => {
  return (
    <Atom.Flex
      sx={{bg: 'blue', gradient: 'blue', color: 'white', pt: 6, pb: 3}}>
      <Atom.BackgroundGradient gradient="blue" ratio={1} opacity={1} />
      <Atom.Container sx={{maxWidth: ['100%', '100%', 880, 1080]}}>
        <Atom.Flex column>
          <Atom.Flex center column>
            <Atom.Container
              sx={{maxWidth: ['100%', '100%', 880, 780], textAlign: 'center'}}>
              <Atom.Heading mega>Jobs for Develoeprs</Atom.Heading>
              <Atom.Heading xxl thin>
                1 Million Developers - Powered by Simple Economics
              </Atom.Heading>
              <Atom.Paragraph sx={{mt: 4}}>
                Earn cryptocurrency 🏦 Land a <span role="img"></span> job 🔥 Do
                dope things 💸
              </Atom.Paragraph>
            </Atom.Container>
            <Atom.Flex>
              <Molecule.Link to="/dashboard">
                <Atom.Button
                  white
                  curved
                  sx={{mt: 4, mx: 2, fontSize: [2, 2, 3]}}>
                  Dashboard
                </Atom.Button>
              </Molecule.Link>
              <Molecule.Link to="/bank">
                <Atom.Button
                  white
                  curved
                  sx={{mt: 4, mx: 2, fontSize: [2, 2, 3]}}>
                  Bank
                </Atom.Button>
              </Molecule.Link>
              <Molecule.Link to="/jobs">
                <Atom.Button
                  white
                  curved
                  sx={{mt: 4, mx: 2, fontSize: [2, 2, 3]}}>
                  Jobs
                </Atom.Button>
              </Molecule.Link>
            </Atom.Flex>
          </Atom.Flex>

          <Atom.Flex center column sx={{flex: 4, order: 1, p: 4}}>
            <Atom.Box sx={styles.desktopPreviews}>
              <Atom.Image
                sx={{maxWidth: '100%', mt: 0}}
                src="https://imgur.com/2p26zqU.png"
              />
            </Atom.Box>
          </Atom.Flex>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};

const Features = props => {
  return (
    <Atom.Box sx={{bg: 'paper', color: 'text', py: 4}}>
      <Atom.Container sx={{my: 5}}>
        <Atom.Flex center column>
          <Atom.Heading giga>Attract Top Talent</Atom.Heading>
          <Atom.Heading md thin sx={{textAlign: 'center'}}>
            <em>
              We'll match You with w/ <strong>elite level engineers</strong>.
            </em>
            <br />
            We've aligned incentives to ensure you have access to a top talent
            pool
          </Atom.Heading>
          <Atom.Box card sx={{width: [500], my: 4}}>
            <FormJobCreate />
          </Atom.Box>
          {/* <CoinbaseCommerceButton
            styled={styles.checkout}
            checkoutId={'20b27ab4-be1f-4fc1-a46a-cd4a1b0f3c65'}>
            Fund Job with Credit/Crypto
          </CoinbaseCommerceButton> */}
          <Atom.Heading lg heavy center sx={{textAlign: 'center', mt: 3}}>
            Looking for work? We can help!
          </Atom.Heading>
        </Atom.Flex>
      </Atom.Container>
      <Atom.Flex center column py={[2, 2, 4]}>
        <Atom.Heading giga heavy center>
          A Balanced System
        </Atom.Heading>
        <Atom.Heading md thin sx={{textAlign: 'center'}}>
          Manage your risk appetite (and legal busines requirements)
          <br />
          by using a stablecoin that matches your needs. Balance.
        </Atom.Heading>
      </Atom.Flex>

      <>
        <Atom.Container sx={{maxWidth: ['100%', '100%', 780, 780], mb: 4}}>
          <Atom.Flex alignCenter>
            <Atom.Flex column sx={{flex: 1, order: 2}}>
              <Atom.Heading xxl heavy center>
                Decentralized Stablcoin
              </Atom.Heading>
              <Atom.Paragraph>
                A cryptocurrency that developers know and love. Known for being
                a decentralized stablecoin, the DAI token is a great way for
                developers to get paid on bounties, gigs, and jobs.
              </Atom.Paragraph>
            </Atom.Flex>
            <Atom.Flex center column sx={{flex: 1}}>
              <Atom.Span>
                <Atom.Image
                  sx={styles.img}
                  src="https://instadapp.io/compound/img/icons/tokens/dai.svg"
                />
              </Atom.Span>
            </Atom.Flex>
          </Atom.Flex>
        </Atom.Container>

        <Atom.Container sx={{maxWidth: ['100%', '100%', 780, 780]}}>
          <Atom.Flex alignCenter>
            <Atom.Flex column sx={{flex: 1}}>
              <Atom.Heading xxl heavy center>
                Centralized Stablcoin
              </Atom.Heading>
              <Atom.Paragraph>
                A centralized stabletoken backed by one of cryptocurrencies most
                trusted names - Coinbase. The USDC stablcoin provides a nice
                on-ramp for businesses just learning about cryptocurrency and
                still require a few guard-rails.
              </Atom.Paragraph>
            </Atom.Flex>
            <Atom.Flex center column sx={{flex: 1, order: 1}}>
              <Atom.Span>
                <Atom.Image
                  sx={styles.img}
                  src="https://instadapp.io/compound/img/icons/tokens/usdc.svg"
                />
              </Atom.Span>
            </Atom.Flex>
          </Atom.Flex>
        </Atom.Container>
      </>

      <Atom.Container>
        <Atom.Flex center column py={[2, 2, 4]}>
          <Atom.Heading xl heavy center>
            proudly #buidled with
          </Atom.Heading>
          <Atom.Flex alignCenter>
            <Atom.Span sx={{mx: 3}}>
              <Atom.Image
                sx={styles.logo}
                src="data:image/png;base64,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"
              />
            </Atom.Span>
            <Atom.Span sx={{mx: 3}}>
              <Atom.Image
                sx={styles.logo}
                src="data:image/png;base64,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"
              />
            </Atom.Span>
            <Atom.Span sx={{mx: 3}}>
              <Atom.Image
                sx={styles.logo}
                src="https://miro.medium.com/max/2256/1*oVotVJoRY5DGKGJq8haS1g.png"
              />
            </Atom.Span>
            <Atom.Span sx={{mx: 3}}>
              <Atom.Image
                sx={styles.logo}
                src="data:image/jpeg;base64,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"
              />
            </Atom.Span>
            <Atom.Span sx={{mx: 3}}>
              <Atom.Image
                sx={styles.logo}
                src="https://miro.medium.com/proxy/1*t716v7cBXEseyVe6-6VySg.jpeg"
              />
            </Atom.Span>
            <Atom.Span sx={{mx: 3}}>
              <Atom.Image
                sx={styles.logo}
                src="data:image/jpeg;base64,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"
              />
            </Atom.Span>
          </Atom.Flex>

          <Atom.Flex center column sx={{mt: 4}}>
            <Atom.Heading xl thin center>
              by
            </Atom.Heading>
            <Atom.Span sx={{mx: 3}}>
              <Atom.Image
                variant="avatar"
                sx={styles.avatar}
                src="https://i.imgur.com/tHyq426.jpg"
              />
            </Atom.Span>
            <Atom.Heading xxl>Kames Geraghty</Atom.Heading>
            <Atom.Heading sm>
              Fullstack Javascript Developer at ConsenSys
            </Atom.Heading>
          </Atom.Flex>
        </Atom.Flex>

        <Atom.Flex center column sx={{mt: 4}}>
          <Atom.Heading giga heavy center sx={{mb: 5}}>
            Open Source Contributions
          </Atom.Heading>

          <Atom.Heading xxl heavy center>
            Neya Coinbase Server
          </Atom.Heading>
          <a href="https://github.com/KamesCG/neya-coinbase-server">
            <Atom.Span tag sx={{my: 3}}>
              https://github.com/KamesCG/neya-coinbase-server
            </Atom.Span>
          </a>
          <Atom.Heading lg>
            Authentication Server for Coinbase Commerce
          </Atom.Heading>
          <Atom.Heading sm>
            Easily communicate with a private backend to generate Charges and
            Checkouts.
          </Atom.Heading>
          <Atom.Span sx={{mx: 3}}>
            <Atom.Image
              sx={styles.feature}
              src="https://imgur.com/FXIie0v.jpg"
            />
          </Atom.Span>
        </Atom.Flex>

        <Atom.Flex center column sx={{mt: 4}}>
          <Atom.Heading xxl heavy center>
            3Box Extensions
          </Atom.Heading>
          <a href="https://github.com/KamesCG/3box-extensions">
            <Atom.Span tag sx={{my: 3}}>
              https://github.com/KamesCG/3box-extensions
            </Atom.Span>
          </a>
          <Atom.Heading lg>
            Compose Authentication, Storage and Messaging into Dapps
          </Atom.Heading>
          <Atom.Heading sm>
            Easily communicate with a private backend to generate Charges and
            Checkouts.
          </Atom.Heading>
          <Atom.Span sx={{mx: 3}}>
            <Atom.Image
              sx={styles.feature}
              src="https://imgur.com/zUQDDJQ.jpg"
            />
          </Atom.Span>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};

const styles = {
  checkout: {
    background: 'blue',
    borderRadius: 5,
    padding: 24,
    color: 'white',
    fontSize: '18px',
  },
  img: {
    borderRadius: 9999,
    boxShadow: 1,
    width: 120,
  },
  avatar: {
    boxShadow: 5,
    border: '1px solid #FFF',
    width: 120,
  },
  logo: {
    width: 120,
  },
  desktopPreview: {
    p: 4,
    ml: [1, 1, '-50%'],
    width: [1, 1, '130%'],
  },
};
