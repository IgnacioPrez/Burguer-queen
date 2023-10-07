import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { allRoutes } from './routes/routes'
import { Loader } from './components/loader'
const CrudProducts = lazy(() => import('./pages/crud-products/CrudProducts'))
const HomeAdmin = lazy(() => import('./pages/home-admin/HomeAdmin'))

function App () {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path={allRoutes.CRUD_PRODUCTS} element={<CrudProducts />} />
          <Route path={allRoutes.HOME_ADMIN} element={<HomeAdmin />} />
        </Routes>
      </BrowserRouter>
    </Suspense>

  )
}

export default App
