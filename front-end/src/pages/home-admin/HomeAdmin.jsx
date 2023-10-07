import React from 'react'
import NavAdmin from '../../components/nav/NavAdmin'
import { ContainerHome } from './styles'
import { Header } from '../../components/header'

const HomeAdmin = () => {
  return (
    <ContainerHome>
      <Header />
      <NavAdmin />
    </ContainerHome>
  )
}

export default HomeAdmin
