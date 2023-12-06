import { Button, Menu, MenuItem } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FILTER_TYPES } from '../../../utilities/constant'
import { obtainProducts } from '../../../redux/slices/productSlice'
import { filterProducts, getProducts } from '../../../services/connectDB'

export const SearchByFilter = ({ stopLoading }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const dispatch = useDispatch()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const applyFilter = (e) => {
    const textHTML = e.target.outerText
    search(textHTML)
  }

  const search = async (text) => {
    if (text.toLowerCase() === FILTER_TYPES.BURGUER.toLowerCase()) {
      const resultOfFilters = await filterProducts('burguer', stopLoading)
      dispatch(obtainProducts(resultOfFilters))
      setAnchorEl(null)
    }
    if ((text.toLowerCase() === FILTER_TYPES.FRIES.toLowerCase())) {
      const resultOfFilters = await filterProducts('fries', stopLoading)
      dispatch(obtainProducts(resultOfFilters))
      setAnchorEl(null)
    }
  }

  const searchWithParams = async () => {
    const data = await getProducts(stopLoading)
    if (data) {
      dispatch(obtainProducts(data))
      setAnchorEl(null)
    }
  }

  return (
    <div>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        size='small'
      >
        <TuneIcon />
        Filtros
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={applyFilter}>Hamburguesas</MenuItem>
        <MenuItem onClick={applyFilter}>Papas</MenuItem>
        <MenuItem onClick={searchWithParams}>Todos</MenuItem>
      </Menu>
    </div>
  )
}

export default SearchByFilter
