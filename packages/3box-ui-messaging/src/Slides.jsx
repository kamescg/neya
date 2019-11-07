import React from 'react';
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
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Flex } from '@horizin/design-system-atoms';
export const Slides = ({ children, ...props }) => (
  <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={125}
    totalSlides={6}
    visibleSlides={3}
  >
    <Slider>
      {props.items &&
        Array.isArray(props.items) &&
        props.items.map((item, index) => <Slide index={index}>{item}</Slide>)}
    </Slider>
    <Flex center column sx={{ my: 3 }}>
      <Flex>
        <ButtonFirst>First</ButtonFirst>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        <ButtonLast>Last</ButtonLast>
      </Flex>
      <DotGroup dotNumbers />
    </Flex>
  </CarouselProvider>
);
