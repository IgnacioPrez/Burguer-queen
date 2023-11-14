import { createContext, useState } from 'react'
import { PrivateRoutes } from '../routes/routes'
import { getInLocalStorage, saveInLocalStorage } from '../utilities/saveToLocalStorage'

export const LocationContext = createContext()

const initialLocation = getInLocalStorage('location') || PrivateRoutes.DASHBOARD

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(initialLocation)

  const locationIsHome = () => {
    setLocation(PrivateRoutes.DASHBOARD)
    saveInLocalStorage('location', PrivateRoutes.DASHBOARD)
  }
  const locationIsCRUD = () => {
    setLocation(PrivateRoutes.CRUD_PRODUCTS)
    saveInLocalStorage('location', PrivateRoutes.CRUD_PRODUCTS)
  }

  return (
    <LocationContext.Provider value={{ location, locationIsHome, locationIsCRUD }}>
      {children}
    </LocationContext.Provider>
  )
}
