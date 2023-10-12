import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { PrivateRoutes, PublicRoutes } from './routes/routes'
import { Loader } from './components/loader'
import { AuthGuard } from './components/guard/AuthGuard'
import { RoutesWithNotFound } from './utilities/routes-with-not-found'
const SignUp = lazy(() => import('./pages/signup/SignUp'))
const Login = lazy(() => import('./pages/login/Login'))
const Private = lazy(() => import('./pages/private/Private'))

function App () {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
          <Route path={PublicRoutes.SIGNUP} element={<SignUp />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
        </RoutesWithNotFound>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
