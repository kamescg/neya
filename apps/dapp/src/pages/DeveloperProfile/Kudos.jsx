export default props => {
  return (
    <Atom.Absolute sx={{top: 0, right: 0, m: 3}}>
      <Atom.Flex>
        <KudosGem image="https://image.flaticon.com/icons/svg/2165/2165488.svg" />
        <KudosGem image="https://gitcoin.co/dynamic/kudos/484/cypherpunk_mind" />
        <KudosGem image="https://image.flaticon.com/icons/svg/2165/2165591.svg" />
        <KudosGem image="https://gitcoin.co/dynamic/kudos/4536/dai" />
      </Atom.Flex>
    </Atom.Absolute>
  );
};

const styles = {
  gem: {
    bg: 'white',
    mx: 2,
    width: 55,
  },
};

const KudosGem = props => <Atom.Image gem sx={styles.gem} src={props.image} />;
