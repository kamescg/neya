import styles from './styles';
import {Modal} from '@horizin/design-system-organisms';
const local = {
  buttonContainer: {
    justifySelf: 'flex-end',
    mt: 'auto',
  },
  button: {
    width: '100%',
    mt: 3,
  },
};

export const BasicAction = ({title, subtitle, label, action, ...props}) => {
  return (
    <Atom.Flex column card sx={props.sx}>
      <Atom.Heading>{title}</Atom.Heading>
      <Atom.Paragraph>{subtitle}</Atom.Paragraph>
      <Atom.Box sx={local.buttonContainer}>
        <Modal content={props.content}>
          <Atom.Button sx={local.button}>{label}</Atom.Button>
        </Modal>
      </Atom.Box>
    </Atom.Flex>
  );
};
