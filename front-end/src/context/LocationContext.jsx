import { createContext, useState } from 'react'
import { PrivateRoutes } from '../routes/routes'

export const LocationContext = createContext()

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(PrivateRoutes.DASHBOARD)

  const locationIsHome = () => {
    setLocation(PrivateRoutes.DASHBOARD)
  }
  const locationIsCRUD = () => {
    setLocation(PrivateRoutes.CRUD_PRODUCTS)
  }

  return (
    <LocationContext.Provider value={{ location, locationIsHome, locationIsCRUD }}>
      {children}
    </LocationContext.Provider>
  )
}
