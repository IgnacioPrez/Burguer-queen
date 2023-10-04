import React from 'react'
import NavAdmin from '../../components/nav/NavAdmin'
import Header from '../../components/header/Header'
import { ContainerHome } from './styles'

const HomeAdmin = () => {
  return (
    <ContainerHome>
      <Header />
      <NavAdmin />
    </ContainerHome>
  )
}

export default HomeAdmin
