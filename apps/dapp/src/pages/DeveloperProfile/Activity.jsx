/**
 * @name ActivityList
 * @param {*} props
 */

/* --- Global --- */
import {useState} from 'react';

/* --- Component --- */
const ActivityList = props => {
  const [data, setData] = useState(sample);
  return (
    <Atom.Box>
      {Array.isArray(data) && data.map(item => <ActivityItem {...item} />)}
    </Atom.Box>
  );
};

ActivityList.defaultProps = {
  contributions: 0,
  commits: 0,
  projects: 0,
};

export default ActivityList;

/* --- Sample Data --- */
const sample = [
  {
    title: 'Complete Gitcoin Quest',
    subtitle: 'Has collected all of the current quest emblems',
    image: 'https://gitcoin.co/dynamic/avatar/ethereum',
  },
  {
    title: 'Complete Rapid Adventure',
    subtitle: 'Has collected all of the current adventure quests',
    image: 'https://gitcoin.co/dynamic/avatar/ethereum',
  },
  {
    title: 'Complete Gitcoin Quest',
    subtitle: 'Has collected all of the current quest emblems',
    image: 'https://gitcoin.co/dynamic/avatar/ethereum',
  },
  {
    title: 'Complete Rapid Adventure',
    subtitle: 'Has collected all of the current adventure quests',
    image: 'https://gitcoin.co/dynamic/avatar/ethereum',
  },
  {
    title: 'Complete Gitcoin Quest',
    subtitle: 'Has collected all of the current quest emblems',
    image: 'https://gitcoin.co/dynamic/avatar/ethereum',
  },
  {
    title: 'Complete Rapid Adventure',
    subtitle: 'Has collected all of the current adventure quests',
    image: 'https://gitcoin.co/dynamic/avatar/ethereum',
  },
];

/* --- --- --- ------ --- --- --- */
// Sub-Components
/* --- --- --- ------ --- --- --- */

/* --- Item Styles --- */
const styles = {
  icon: {
    mx: 2,
    width: 80,
  },
  content: {},
};
/* --- Item Component --- */
const ActivityItem = props => {
  return (
    <Atom.Flex alignCenter between card>
      <Atom.Flex alignCenter>
        <Atom.Span sx={styles.icon}>
          <Atom.Image sx={{}} src={props.image} />
        </Atom.Span>
        <Atom.Box sx={styles.content}>
          <Atom.Heading lg heavy>
            {props.title}
          </Atom.Heading>
          <Atom.Heading sm thin sx={{m: 0}}>
            {props.subtitle}
          </Atom.Heading>
          {Array.isArray(props.tags) && (
            <Atom.Flex sx={styles.tags}>
              {tags.map(item => (
                <Atom.Span tag xs sx={styles.tag}>
                  {item}
                </Atom.Span>
              ))}
            </Atom.Flex>
          )}
        </Atom.Box>
      </Atom.Flex>

      <Atom.Flex>
        <Atom.Button blue>View Activity ></Atom.Button>
      </Atom.Flex>
    </Atom.Flex>
  );
};
