import {Dashboard} from 'templates';

import {FormJobCreate} from 'forms';

const Profile = props => (
  <Dashboard>
    <Showcase />
    <Atom.Container>
      <FormJobCreate accessLevel={{space: 'nesa'}} />
    </Atom.Container>
  </Dashboard>
);

const Showcase = props => {
  return (
    <Atom.Box sx={{}}>
      <Atom.Container>
        <Atom.Flex alignCenter between>
          <Atom.Box>
            <Atom.Heading giga heavy sx={{mb: 3}}>
              Create Job
            </Atom.Heading>
            <Atom.Heading md thin>
              Become A Job Creator
            </Atom.Heading>
          </Atom.Box>
          {/* <ShowcaseActions /> */}
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};

export default Profile;
