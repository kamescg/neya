/**
 * @name TipButton
 * @author kames
 * @description Tip Developer using DAI
 * @todo Add MakerDAI js library to make it simple to transfer DAI.
 */

/* --- Styles --- */
const styles = {
  star: {
    maxWidth: 25,
  },
  total: {
    m: 0,
    ml: 3,
  },
};

/* --- Component --- */
const TipButton = props => <Atom.Button green>Tip Developer</Atom.Button>;

TipButton.defaultProps = {
  total: 10,
};

export default TipButton;
