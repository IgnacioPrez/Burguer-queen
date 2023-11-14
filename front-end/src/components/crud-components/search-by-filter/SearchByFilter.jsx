import { Button, Menu, MenuItem } from '@mui/material'
import TuneIcon from '@mui/icons-material/Tune'
import { useState } from 'react'

export const SearchByFilter = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
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
        <MenuItem onClick={handleClose}>Hamburguesas</MenuItem>
        <MenuItem onClick={handleClose}>Papas</MenuItem>
        <MenuItem onClick={handleClose}>Bebidas</MenuItem>
      </Menu>
    </div>
  )
}

export default SearchByFilter
