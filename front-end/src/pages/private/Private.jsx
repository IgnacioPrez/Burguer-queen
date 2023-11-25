import { Navigate, Route } from 'react-router-dom'
import { PrivateRoutes } from '../../routes/routes'
import { lazy, useContext, useEffect } from 'react'
import { RoutesWithNotFound } from '../../utilities/routes-with-not-found'
import { LocationContext } from '../../context/LocationContext'
const Dashboard = lazy(() => import('./dashboard/Dashboard'))
const CrudProdcuts = lazy(() => import('./crud-products/CrudProducts'))

const Private = () => {
  const { locationIsHome, locationIsCRUD } = useContext(LocationContext)
  const path = window.location.pathname

  useEffect(() => {
    if (path.includes(PrivateRoutes.DASHBOARD)) {
      locationIsHome()
    } else if (path === `/${PrivateRoutes.PRIVATE}`) {
      locationIsHome()
    } else {
      locationIsCRUD()
    }
  }, [path])

  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.CRUD_PRODUCTS} element={<CrudProdcuts />} />
    </RoutesWithNotFound>
  )
}

export default Private
