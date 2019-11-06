import { Search } from 'templates'
import { FormSearch } from 'forms'
const SearchView = props => 
<Search>
  <Atom.Box
  sx={{
    bg: 'paper',
    color: 'text',
    px: 5,
    py: 5,
    }}>
      <Atom.Heading xxl>Developer Search - <Atom.Span sx={{fontWeight: 300}}>Cerebro Connect</Atom.Span></Atom.Heading>
      <Atom.Flex alignCenter between sx={{flex:1}}>
        <Atom.Flex sx={{flex: 4, py: 3}}>
          <FormSearch />
        </Atom.Flex>
      </Atom.Flex>
  </Atom.Box>
</Search>

export default SearchView