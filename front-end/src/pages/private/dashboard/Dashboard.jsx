import React from 'react'
import { ContainerHome } from './styles'
import { Header } from '../../../components/header/'
import { NavAdmin } from '../../../components/nav/'

const Dashboard = () => {
  return (
    <ContainerHome>
      <Header />
      <NavAdmin />
    </ContainerHome>
  )
}

export default Dashboard
