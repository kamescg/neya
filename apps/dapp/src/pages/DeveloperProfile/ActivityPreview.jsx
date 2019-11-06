const Activity = ({sx, ...props}) => (
  <Atom.Box card sx={{bg: 'purple', ...sx}}>
    <Atom.Heading lg heavy>
      Activity
    </Atom.Heading>
    <Atom.HorizontalRule sx={{my: 2}} />
    <Atom.Heading as="h5">Last Seen: {props.timestamp}</Atom.Heading>
    <Atom.Heading as="h5">Reliability: {props.reliability}</Atom.Heading>
    <Atom.Heading as="h5">Avg Hourly Rate: {props.rate}</Atom.Heading>
  </Atom.Box>
);

Activity.defaultProps = {
  timestamp: '1573041512',
  reliability: 'average',
  rate: 5000,
};

export default Activity;
