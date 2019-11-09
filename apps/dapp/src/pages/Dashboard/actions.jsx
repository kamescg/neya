import styles from './styles';

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
export const CreateDeveloperProfile = props => {
  return (
    <Atom.Flex column card sx={props.sx}>
      <Atom.Heading>Create Developer Profile</Atom.Heading>
      <Atom.Paragraph>
        Start your decentralized identity developer profile and start earning
        money today.
      </Atom.Paragraph>
      <Atom.Button sx={local.button}>Create Profile</Atom.Button>
    </Atom.Flex>
  );
};

export const CreateBank = props => {
  return (
    <Atom.Flex column card sx={props.sx}>
      <Atom.Heading>Create Bank</Atom.Heading>
      <Atom.Paragraph>
        Deploy a personal bank to the blockchain. Simplify basic investing
        actions.
      </Atom.Paragraph>
      <Atom.Box x={local.buttonContainer}>
        <Atom.Button sx={local.button}>Create Bank</Atom.Button>
      </Atom.Box>
    </Atom.Flex>
  );
};

export const CreateTeam = props => {
  return (
    <Atom.Flex column card sx={props.sx}>
      <Atom.Heading>Create Team</Atom.Heading>
      <Atom.Paragraph>
        Launch team developer projects and start earning together as a
        collective.
      </Atom.Paragraph>
      <Atom.Button sx={local.button}>Create Team</Atom.Button>
    </Atom.Flex>
  );
};

export const BasicAction = ({title, subtitle, label, action, ...props}) => {
  return (
    <Atom.Flex column card sx={props.sx}>
      <Atom.Heading>{title}</Atom.Heading>
      <Atom.Paragraph>{subtitle}</Atom.Paragraph>
      <Atom.Box sx={local.buttonContainer}>
        <Atom.Button sx={local.button}>{label}</Atom.Button>
      </Atom.Box>
    </Atom.Flex>
  );
};
