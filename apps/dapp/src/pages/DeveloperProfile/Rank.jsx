const Rank = ({sx, ...props}) => (
  <Atom.Box card sx={{...sx}}>
    <Atom.Heading lg heavy>
      Rank
    </Atom.Heading>
    <Atom.HorizontalRule sx={{my: 2}} />
    <Atom.Heading as="h5">Contributions: {props.contributions}</Atom.Heading>
    <Atom.Heading as="h5">Commits: {props.commits}</Atom.Heading>
    <Atom.Heading as="h5">Projects: {props.projects}</Atom.Heading>
  </Atom.Box>
);

Rank.defaultProps = {
  contributions: 0,
  commits: 0,
  projects: 0,
};

export default Rank;
