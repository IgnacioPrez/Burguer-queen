import { Route, Routes } from 'react-router-dom'

export const RoutesWithNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path='*' element={<div>Not found 404</div>} />
    </Routes>
  )
}
