const SmallStatistic = props => {
  return (
    <Atom.Flex
      center
      column
      sx={{
        mx: 3,
        ...props.sx,
      }}>
      <Atom.Heading thin sx={{mb: 0, fontSize: [1]}}>
        {props.value}
      </Atom.Heading>
      <Atom.Heading sx={{mb: 0, fontSize: [1]}}>{props.label}</Atom.Heading>
    </Atom.Flex>
  );
};

export default SmallStatistic;
