import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { PrivateRoutes, PublicRoutes } from './routes/routes'
import { Loader } from './components/loader'
import { AuthGuard } from './components/guard/AuthGuard'
import { RoutesWithNotFound } from './utilities/routes-with-not-found'
import { useDispatch } from 'react-redux'
import { updateList } from './redux/slices/orderSlice'
import { getOrders } from './services/connectDB'
import io from 'socket.io-client'
const SignUp = lazy(() => import('./pages/signup/SignUp'))
const Login = lazy(() => import('./pages/login/Login'))
const Private = lazy(() => import('./pages/private/Private'))

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    const refreshList = async () => {
      const { orders } = await getOrders()
      if (orders && Array.isArray(orders) && orders !== null) {
        const newData = orders.map((items) => {
          return {
            ...items,
            min: 0
          }
        })
        console.log(newData)

        return newData.length > 0 && dispatch(updateList(newData))
      }
    }
    refreshList()
  }, [])

  useEffect(() => {
    const socket = io('http://localhost:8080')
    async function addNewOrders () {
      const { orders } = await getOrders()
      if (orders && Array.isArray(orders) && orders !== null) {
        const newData = orders.map((items) => {
          return {
            ...items,
            min: 0
          }
        })

        return newData.length > 0 && dispatch(updateList(newData))
      }
    }
    socket.on('changes', (data) => {
      if (data && data.updateDescription) {
        console.log('enviado')
        addNewOrders()
      }
    })
    return () => {
      socket.disconnect()
    }
  }, [])

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
