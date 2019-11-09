const styles = {
  img: {
    maxWidth: 22,
    borderRadius: 9999,
    boxShadow: 0,
    mr: 2,
  },
};

const TokenBalance = props => {
  return (
    <Atom.Flex
      alignCenter
      between
      sx={{
        my: 2,
        width: '100%',
        ...props.sx,
      }}>
      <Atom.Flex alignCenter>
        <Atom.Image src={props.img} sx={styles.img} />
        <Atom.Heading sx={{mb: 0, fontSize: [1]}}>{props.label}</Atom.Heading>
      </Atom.Flex>
      <Atom.Heading thin sx={{mb: 0, fontSize: [1]}}>
        {props.value}
      </Atom.Heading>
    </Atom.Flex>
  );
};

export default TokenBalance;
