const TokenBalances = props => {
  return (
    <Atom.Box sx={props.sx}>
      <Atom.Flex center column>
        <Atom.Heading xxl heavy>
          Token Balances
        </Atom.Heading>
        <Atom.Heading md thin>
          Token Balances
        </Atom.Heading>
      </Atom.Flex>
      <Atom.HorizontalRule sx={{my: 2}} />
      <Atom.Flex between sx={styles.container}>
        <Token sx={styles.card} label="ETH" value="123" />
        <Token sx={styles.card} label="DAI" value="22" />
        <Token sx={styles.card} label="SPK" value="5" />
        <Token sx={styles.card} label="CYS" value="100,000" />
        <Token sx={styles.card} label="CYS" value="100,000" />
      </Atom.Flex>
    </Atom.Box>
  );
};
