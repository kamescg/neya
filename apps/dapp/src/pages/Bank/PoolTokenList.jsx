const styles = {
  list: {
    flexDirection: ['column', 'column', 'row', 'row'],
    flexWrap: 'wrap',
  },
  item: {
    mx: 3,
    // flex: 1,
    width: '45%',
  },
  container: {},
  img: {
    maxWidth: 28,
  },
  details: {
    ml: 2,
  },
  stat: {
    mb: 0,
    mx: 2,
    fontSize: [1, 1, 2],
  },
  action: {
    mx: 2,
  },
};
export const PoolTokenList = props => {
  return (
    <Atom.Flex between sx={styles.list}>
      {tokens.map(token => (
        <Item {...token} sx={styles.item} />
      ))}
    </Atom.Flex>
  );
};

const Item = props => {
  return (
    <Atom.Flex alignCenter between card sx={styles.item}>
      <Atom.Flex alignCenter sx={styles.left}>
        <Atom.Image src={props.img} sx={styles.img} />
        <Atom.Box sx={styles.details}>
          <Atom.Heading sx={{mb: 0, fontSize: [2, 2, 3]}}>
            {props.label}
          </Atom.Heading>
          <Atom.Heading thin sx={{mb: 0, fontSize: [1]}}>
            {props.amount}
          </Atom.Heading>
        </Atom.Box>
      </Atom.Flex>

      <Atom.Flex alignCenter sx={styles.center}>
        <Atom.Heading thin sx={styles.stat}>
          {props.amount}
        </Atom.Heading>
        <Atom.Heading thin sx={styles.stat}>
          {props.share}
        </Atom.Heading>
      </Atom.Flex>
      <Atom.Flex alignCenter sx={styles.right}>
        <Atom.Span tag sx={styles.action}>
          Buy
        </Atom.Span>
        <Atom.Span sx={styles.action}>Sell</Atom.Span>
      </Atom.Flex>
    </Atom.Flex>
  );
};

const tokens = [
  {
    img: 'https://instadapp.io/dashboard/img/icons/tokens/eth.svg',
    label: 'ETH',
    amount: '0.00',
    share: '0.00',
    erc20: '0.00',
    eth: '',
  },
  {
    img: 'https://instadapp.io/earn/img/icons/tokens/dai.svg',
    label: 'DAI',
    amount: '0.00',
    share: '0.00',
    erc20: '0.00',
    eth: '',
  },
  {
    img:
      'https://i1.wp.com/nigeriabitcoincommunity.com/wp-content/uploads/2019/08/usd-coin-usdc-logo.png?resize=368%2C368&ssl=1',
    label: 'ETH',
    amount: '0.00',
    share: '0.00',
    erc20: '0.00',
    eth: '',
  },
  {
    img: 'https://instadapp.io/uniswap/img/icons/tokens/mkr.svg',
    label: 'MKR',
    amount: '0.00',
    share: '0.00',
    erc20: '0.00',
    eth: '',
  },
  {
    img: 'https://instadapp.io/uniswap/img/icons/tokens/mkr.svg',
    label: '0X',
    amount: '0.00',
    share: '0.00',
    erc20: '0.00',
    eth: '',
  },
  {
    img: 'https://instadapp.io/uniswap/img/icons/tokens/rep.svg',
    label: 'AGR',
    amount: '0.00',
    share: '0.00',
    erc20: '0.00',
    eth: '',
  },
  {
    img: 'https://instadapp.io/uniswap/img/icons/tokens/bat.svg',
    label: 'BAT',
    amount: '0.00',
    share: '0.00',
    erc20: '0.00',
    eth: '',
  },
  {
    img: 'https://instadapp.io/uniswap/img/icons/tokens/knc.svg',
    label: 'KYB',
    amount: '0.00',
    share: '0.00',
    erc20: '0.00',
    eth: '',
  },
];
