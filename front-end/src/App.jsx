import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import { PrivateRoutes, PublicRoutes } from './routes/routes'
import { Loader } from './components/loader'
import { AuthGuard } from './components/guard/AuthGuard'
import { RoutesWithNotFound } from './utilities/routes-with-not-found'
import * as Realm from 'realm-web'
import { useDispatch } from 'react-redux'

import { updateList } from './redux/slices/orderSlice'
const SignUp = lazy(() => import('./pages/signup/SignUp'))
const Login = lazy(() => import('./pages/login/Login'))
const Private = lazy(() => import('./pages/private/Private'))
const app = new Realm.App({ id: import.meta.env.VITE_APP_ID_MONGOREAL })

function App () {
  const [events, setEvents] = useState([])
  const disptach = useDispatch()

  useEffect(() => {
    const refreshList = async () => {
      const user = await app.logIn(Realm.Credentials.anonymous())
      const allPayData = await user.functions.showPayOrders()
      if (allPayData) {
        const newData = allPayData.map(({ createdAt, ...el }) => {
          return {
            createdAt: createdAt.toISOString(),
            ...el,
            min: 0
          }
        })
        disptach(updateList(newData))
      }
      const mongodb = app.currentUser.mongoClient('mongodb-atlas')
      const collection = mongodb.db('test').collection('orders')
      for await (const change of collection.watch()) {
        setEvents(eventsDb => [...eventsDb, change])
      }
    }
    refreshList()
  }, [events])

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
