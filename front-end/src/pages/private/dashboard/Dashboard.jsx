import { ContainerDashboard, MainDashboard } from './styles'
import { NavAdmin } from '../../../components/nav/'
import { Header } from '../../../components/dashboard-components/header'
import { OrderList } from '../../../components/dashboard-components/order-list'

const Dashboard = () => {
  // const getProducts = async () => {
  //   try {
  //     const response = await fetch(`${baseURL}/orders/`, {
  //       method: 'GET',
  //       credentials: 'include'
  //     })
  //     const result = await response.json()
  //     console.log(result)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // getProducts()

  // useEffect(() => {
  //   const cookies = Cookies.get()
  //   console.log(cookies)
  // }, [])
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
