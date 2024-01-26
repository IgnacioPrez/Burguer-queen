import HomeIcon from '@mui/icons-material/Home'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import { LogoutContent, NavContent, NavList, Navbar } from './styles'
import LogoutIcon from '@mui/icons-material/Logout'
import { NavLink } from 'react-router-dom'
import { PrivateRoutes } from '../../routes/routes'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlices'
import { baseURL } from '../../utilities/constant'
import { persistor } from '../../redux/store'

const NavAdmin = (props) => {
  const dispatch = useDispatch()

  const endSesion = () => {
    fetch(`${baseURL}/user/logout`)
      .then((data) => data.json())
      .then((result) => {
        if (result.ok) {
          dispatch(logout())
          persistor.purge()
        }
      })
      .catch((err) => console.error(err))
  }

  return (
    <NavContent>
      <h2>Admin</h2>
      <Navbar>
        <NavList>
          <li>
            <HomeIcon />
            <NavLink
              to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.DASHBOARD}`} style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? 'rgb(96, 98, 110)' : 'inherit',
                  color: isActive ? '#DDE2FF' : 'inherit'
                }
              }}
            >
              General
            </NavLink>
          </li>
          <li>
            <FastfoodIcon />
            <NavLink
              to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.CRUD_PRODUCTS}`} style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? 'rgb(96, 98, 110)' : 'inherit',
                  color: isActive ? '#DDE2FF' : 'inherit'
                }
              }}
            >
              Productos
            </NavLink>
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
