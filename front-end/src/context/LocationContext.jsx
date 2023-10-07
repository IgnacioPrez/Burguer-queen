import { createContext, useState } from 'react'
import { allRoutes } from '../routes/routes'

export const LocationContext = createContext()

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(allRoutes.HOME_ADMIN)

  const locationIsHome = () => {
    setLocation(allRoutes.HOME_ADMIN)
  }
  const locationIsCRUD = () => {
    setLocation(allRoutes.CRUD_PRODUCTS)
  }

  return (
    <LocationContext.Provider value={{ location, locationIsHome, locationIsCRUD }}>
      {children}
    </LocationContext.Provider>
  )
}
