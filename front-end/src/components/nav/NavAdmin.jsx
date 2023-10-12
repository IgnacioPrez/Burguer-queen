import { useContext } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { LogoutContent, NavContent, NavList, Navbar } from './styles'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../routes/routes'
import { LocationContext } from '../../context/LocationContext'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlices'
import { baseURL } from '../../utilities/constant'

const NavAdmin = () => {
  const { location, locationIsHome, locationIsCRUD } = useContext(LocationContext)
  const dispatch = useDispatch()

  const endSesion = () => {
    fetch(`${baseURL}/user/logout`)
      .then((data) => data.json())
      .then((result) => {
        if (result.ok) {
          dispatch(logout())
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <NavContent>
      <h2>Admin</h2>
      <Navbar>
        <NavList location={location}>
          <li>
            <HomeIcon />
            <Link to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.DASHBOARD}`} onClick={locationIsHome}>
              General
            </Link>
          </li>
          <li>
            <FastfoodIcon />
            <Link to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CRUD_PRODUCTS}`} onClick={locationIsCRUD}>
              Productos
            </Link>
          </li>
        </NavList>
      </Navbar>
      <LogoutContent>
        <button onClick={endSesion}>
          <LogoutIcon />
          Cerrar sesión
        </button>
      </LogoutContent>
    </NavContent>
  )
}

export default NavAdmin
