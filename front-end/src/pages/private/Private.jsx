import { Navigate, Route } from 'react-router-dom'
import { PrivateRoutes } from '../../routes/routes'
import { lazy } from 'react'
import { RoutesWithNotFound } from '../../utilities/routes-with-not-found'
const Dashboard = lazy(() => import('./dashboard/Dashboard'))
const CrudProdcuts = lazy(() => import('./crud-products/CrudProducts'))

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
      <Route path={PrivateRoutes.CRUD_PRODUCTS} element={<CrudProdcuts />} />
    </RoutesWithNotFound>
  )
}

export default Private
