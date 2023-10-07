import React, { useContext } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { LogoutContent, NavContent, NavList, Navbar } from './styles'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import { allRoutes } from '../../routes/routes'
import { LocationContext } from '../../context/LocationContext'

const NavAdmin = () => {
  const { location, locationIsHome, locationIsCRUD } = useContext(LocationContext)

  console.log(location)

  return (
    <NavContent>
      <h2>Admin</h2>
      <Navbar>
        <NavList location={location}>
          <li>
            <HomeIcon />
            <Link to={allRoutes.HOME_ADMIN} onClick={locationIsHome}>General</Link>
          </li>
          <li>
            <FastfoodIcon />
            <Link to={allRoutes.CRUD_PRODUCTS} onClick={locationIsCRUD}>Productos</Link>
          </li>
        </NavList>
      </Navbar>
      <LogoutContent>
        <LogoutIcon />
        <p>Cerrar sesión</p>
      </LogoutContent>
    </NavContent>
  )
}

export default NavAdmin
