import { useState, useEffect } from 'react'
import { SearchByFilter } from '../search-by-filter'
import { AutoCompleteOptions, ContainerFilter, ContentFiltersToApplay, FilterContent, MySearch, SearchFilter } from './styles'
import SearchIcon from '@mui/icons-material/Search'
import * as Realm from 'realm-web'
import { useDispatch } from 'react-redux'
import { addSearch, clearSearch } from '../../../redux/slices/productSlice'
import CloseIcon from '@mui/icons-material/Close'

const appDB = new Realm.App({ id: import.meta.env.VITE_APP_ID_MONGOREAL })
const FilterProducts = ({ stopLoading }) => {
  const [search, setSearch] = useState('')
  const [autoComplete, setAutoComplete] = useState([])
  const [viewList, setViewList] = useState(null)
  const [prevSearch, setPrevSearch] = useState('')
  const dispatch = useDispatch()

  function debounce (callbackFunc, wait) {
    let timerId
    return (...args) => {
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        callbackFunc(...args)
      }, wait)
    }
  }

  const searchInDb = async (text) => {
    try {
      const user = await appDB.logIn(Realm.Credentials.anonymous())
      const resultOfSearch = await user.functions.searchProducts(text)
      return resultOfSearch ? dispatch(addSearch(resultOfSearch)) : null
    } catch (err) {
      console.error(err)
    }
  }

  const changeSearch = (e) => {
    setSearch(() => e.target.innerText)
    setViewList(false)
  }

  const handleChange = (e) => {
    debounce(setSearch(e.target.value), 2000)
  }

  const showOptions = async (text) => {
    try {
      const user = await appDB.logIn(Realm.Credentials.anonymous())
      const getOptions = await user.functions.searchAutoComplete(text)
      setAutoComplete(() => getOptions)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    if (search.length > 2) {
      showOptions(search)
      setViewList(true)
    } else {
      setAutoComplete([])
    }
  }, [search.length > 2])

  const handleSubmit = (e) => {
    e.preventDefault()
    searchInDb(search)
    setPrevSearch(search)
    setSearch('')
  }

  const clearMyPrevSearch = () => {
    setPrevSearch('')
    dispatch(clearSearch())
  }
  return (
    <ContainerFilter>
      <ContentFiltersToApplay>
        <SearchFilter onSubmit={handleSubmit}>
          <SearchIcon />
          <input type='text' placeholder='Busca tu producto' onChange={(e => handleChange(e))} value={search} />
        </SearchFilter>

        {autoComplete.length > 0 && viewList && (
          <AutoCompleteOptions>
            {autoComplete.map((item) => {
              return (
                <li key={crypto.randomUUID()} onClick={(e) => changeSearch(e)}>
                  {item.title}
                </li>
              )
            })}
          </AutoCompleteOptions>
        )}

        <FilterContent>
          <SearchByFilter stopLoading={stopLoading} />
        </FilterContent>
      </ContentFiltersToApplay>
      {
      prevSearch.length > 0 && <MySearch>
        <p>{prevSearch}</p>
        <button onClick={clearMyPrevSearch}>
          <CloseIcon />
        </button>
                               </MySearch>
      }
    </ContainerFilter>
  )
}

export default FilterProducts
