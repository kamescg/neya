import { Link } from '@reach/router'
import {RegionTop, RegionFooter} from 'core';
import { Menu } from '@horizin/design-system-molecules';

const styles = {
  dashboard: {
    flex: 1,
    width: '100%'
  }
}

const SearchTemplate = ({ sx, children, ...props }) => {
  return (
    <Atom.Flex column sx={{ minHeight: '100vh', flex: 1, ...sx}}>
      <RegionTop
          bg="#1e1e2d"
          color="white"
          borderBottom="3px solid #dc448d"
          p={2}
        />

      <Atom.Flex sx={styles.dashboard}>
        {/* Aside Region */}
          <Atom.Flex sx={{bg: 'cobalt', color: 'white', flex: 2, order: 2}}>
            
          <Atom.Flex between column flex={1}>
  
            <Atom.Box sx={{p: 3, flex: 10}}>
              <Menu
                direction='column'
                sx={{
                  my: 1,
                  flexDirection: 'column'
                }}
                items={menu}
              />
            </Atom.Box>
            <Atom.Box>
              <Atom.BackgroundGradient gradient='white' opacity={.05} />
              {/* <RegionFooterDashboard /> */}
            </Atom.Box>
          </Atom.Flex>
  
          </Atom.Flex>
  
          {/* Main Region */}
          <Atom.Flex column sx={{flex: 10, order: 1}}>
            <Atom.Flex column flex={112} width='100%' {...props.styled}>
              {children}
            </Atom.Flex>
          </Atom.Flex>

      </Atom.Flex>
      <RegionFooter/>
    </Atom.Flex>
  )
}


SearchTemplate.defaultProps = {
  styled: {}
}

SearchTemplate.propTypes = {
  styled: PropTypes.object
}

const menu = [
  {
    label:'Profiles',
    to:'/developer',
  },
  {
    label:'Manage',
    to:'/developer/manage',
  },
  {
    label:'Authenticate',
    to:'/developer/authenticate',
  },

]

export default SearchTemplate

