/* --- Global --- */
import idx from 'idx';
import {ProfileIdentity, ProfileDetailsOccupation} from '3box-ui-profiles';
export default props => {
  return (
    <Atom.Absolute sx={{bottom: 0, left: 0, m: 3}}>
      <Atom.Heading giga>
        {idx(props, _ => _.box['@'][props.box.address].profile.name)}
      </Atom.Heading>
      <Atom.Heading xl thin>
        {idx(props, _ => _.box['@'][props.box.address].profile.job)}
        <Atom.Span sx={{mx: 2}}>at</Atom.Span>
        {idx(props, _ => _.box['@'][props.box.address].profile.employer)}
      </Atom.Heading>
      <ProfileDetailsOccupation sx={props.sxOccupation} />
    </Atom.Absolute>
  );
};

const styles = {
  gem: {
    bg: 'white',
    borderRadius: 12,
    boxShadow: 0,
    p: 2,
    mx: 2,
    width: 55,
  },
};

const KudosGem = props => <Atom.Image sx={styles.gem} src={props.image} />;
