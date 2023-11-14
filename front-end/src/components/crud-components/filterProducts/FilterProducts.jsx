import { SearchByFilter } from '../search-by-filter'
import { ContainerFilter, FilterContent, SearchFilter } from './styles'
import SearchIcon from '@mui/icons-material/Search'

const FilterProducts = () => {
  return (
    <ContainerFilter>
      <SearchFilter>
        <SearchIcon />
        <input type='text' placeholder='Busca tu producto' />
      </SearchFilter>
      <FilterContent>
        <SearchByFilter />
      </FilterContent>
    </ContainerFilter>
  )
}

export default FilterProducts
