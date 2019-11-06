const Kudos = ({sx, ...props}) => (
  <Atom.Box card sx={{bg: 'purple', ...sx}}>
    <Atom.Heading lg heavy>
      Kudos
    </Atom.Heading>
    <Atom.HorizontalRule sx={{my: 2}} />
    <Atom.Heading as="h5">Total: {props.total}</Atom.Heading>
    <Atom.Heading as="h5">Activity: {props.activity}</Atom.Heading>
    <Atom.Heading as="h5">Projects: {props.projects}</Atom.Heading>
  </Atom.Box>
);

Kudos.defaultProps = {
  total: 4,
  activity: 'average',
  projects: 0,
};

export default Kudos;
