import { ContainerDashboard, MainDashboard } from './styles'
import { NavAdmin } from '../../../components/nav/'
import { Header } from '../../../components/dashboard-components/header'
import { OrderList } from '../../../components/dashboard-components/order-list'

const Dashboard = () => {
  return (
    <ContainerDashboard>
      <NavAdmin />
      <MainDashboard>
        <Header />
        <OrderList />
      </MainDashboard>
    </ContainerDashboard>
  )
}

export default Dashboard
