import {Dashboard} from 'templates';
import {StorageRender} from '3box-ui-system-render';
import {FormJobCreate} from 'forms';

const Profile = props => (
  <Dashboard>
    <Showcase />
    <Atom.Container>
      <FormJobCreate accessLevel={{space: 'neya'}} />
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
          <StorageRender
            space="neya"
            access="public"
            selector="jobList"
            index="jobList"
            component={CustomComponent}
            // data={data}
          />
          {/* <ShowcaseActions /> */}
        </Atom.Flex>
      </Atom.Container>
    </Atom.Box>
  );
};

const CustomComponent = props => {
  return <Atom.Flex>yo</Atom.Flex>;
};

export default Profile;
