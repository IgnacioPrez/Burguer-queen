import React from 'react'
import { ContainerFilter, FilterContent, SearchFilter } from './styles'
import SearchIcon from '@mui/icons-material/Search'
import TuneIcon from '@mui/icons-material/Tune'

const FilterProducts = () => {
  return (
    <ContainerFilter>
      <SearchFilter>
        <SearchIcon />
        <input type='text' placeholder='Busca tu producto' />
      </SearchFilter>
      <FilterContent>
        <TuneIcon />
        Filtros
      </FilterContent>
    </ContainerFilter>
  )
}

export default FilterProducts
