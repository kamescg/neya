/* --- Global --- */
import {
  ProfileCardVanity, 
  ProfileCardShowcase,
  ProfileIdentity,
  ProfileDetailsOccupation,
  ProfileCover,
  ProfileImage,
} from '3box-ui-profiles'
export default props => { 
 return(
  <Atom.Absolute sx={{bottom: 0, left: 0, m: 3}}>
    <ProfileIdentity sx={props.sx}/>
    <ProfileDetailsOccupation sx={props.sxOccupation}/>
  </Atom.Absolute>
)}

const styles = {
  gem: {
    bg: 'white',
    borderRadius: 12,
    boxShadow: 0,
    p: 2,
    mx: 2,
    width: 55
  }
}

const KudosGem = props =>
<Atom.Image sx={styles.gem} src={props.image}/>