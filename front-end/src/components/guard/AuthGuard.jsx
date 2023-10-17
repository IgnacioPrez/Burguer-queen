import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '../../routes/routes'

export const AuthGuard = () => {
  const userState = useSelector((store) => store.user)
  return userState.token ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}
