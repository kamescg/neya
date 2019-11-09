import React, { useState, useEffect } from 'react';
import { BountyItem } from './BountyItem';
import 'pure-react-carousel/dist/react-carousel.es.css';

import { wrap } from 'module';
// import { Slides } from '@horizin/design-system-molecules';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonFirst,
  ButtonLast,
  DotGroup,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel';

export const QueryBountyList = props => {
  const [items, setItems] = useState();

  useEffect(() => {
    const url =
      'https://api.bounties.network/bounty/?ordering=bounty_created&issuer=0x8d4d05d51771dbbd38276d8f931cfcad03724524&bountyStage=0';
    const urlBountyFull = 'https://api.bounties.network/bounty';
    const urlGitcoin =
      'https://api.bounties.network/bounty/?ordering=bounty_created&platform=gitcoin';
    const urlBountiesNetwork =
      'https://api.bounties.network/bounty/?ordering=bounty_created&platform=bounties-network';

    const runEffect = async () => {
      let data;
      switch (props.platform) {
        case 'bounties-network':
          data = await fetch(urlBountyFull);
          break;
        case 'gitcoin':
          data = await fetch(urlGitcoin);
          break;
        default:
          data = await fetch(urlBountyFull);
          break;
      }
      // const data = await fetch(urlBountyFull);
      const json = await data.json();
      setItems(json.results);
    };
    runEffect();
  }, [props]);
  console.log(items, 'bounty items');
  return !items ? null : (
    <>
      <Atom.Flex sx={{ flexWrap: 'wrap', ...props.sx }}>
        {Array.isArray(items) && (
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={items.length}
            visibleSlides={3}
          >
            <Slider totalSlides={items.length} visibleSlides={4}>
              {items.map((bounty, index) => (
                <Slide index={index}>
                  <BountyItem sx={styles.bounty} {...bounty} />
                </Slide>
              ))}
            </Slider>
            <Atom.Flex center column sx={{ my: 3 }}>
              <Atom.Flex>
                <ButtonFirst>First</ButtonFirst>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
                <ButtonLast>Last</ButtonLast>
              </Atom.Flex>
              <DotGroup dotNumbers />
            </Atom.Flex>
          </CarouselProvider>
        )}
      </Atom.Flex>
    </>
  );
};

const styles = {
  joblist: {
    mx: 4
  },
  content: {
    bg: 'paper',
    color: 'text',
    py: 4
  },
  sectionHeader: {
    textAlign: 'center'
  },
  bounty: {
    mx: 'auto',
    // mx: 4,
    width: ['90%']
  }
};
