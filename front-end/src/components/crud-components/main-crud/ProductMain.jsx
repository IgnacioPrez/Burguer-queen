import { useEffect, useState } from 'react'
import { FilterProducts } from '../filterProducts'
import { ListProducts } from '../list-products'
import { AddBtn, AddProduct, HeaderCrud, Main, TitleCrud } from './styles'
import AddIcon from '@mui/icons-material/Add'
import { useDispatch } from 'react-redux'
import { getProducts } from '../../../services/connectDB'
import { obtainProducts } from '../../../redux/slices/productSlice'

const ProductMain = ({ openForm }) => {
  const [loading, setLoading] = useState(true)

  const stopLoading = () => setLoading(false)

  const dispatch = useDispatch()
  useEffect(() => {
    const obtainAllproducts = async () => {
      const data = await getProducts(stopLoading)
      return dispatch(obtainProducts(data))
    }
    obtainAllproducts()
  }, [])

  return (
    <Main>
      <HeaderCrud>
        <TitleCrud>
          <p>Productos  🍔</p>
        </TitleCrud>
        <AddProduct>
          <AddBtn onClick={openForm}>
            <AddIcon />
            Agregar Producto
          </AddBtn>
        </AddProduct>
      </HeaderCrud>
      <FilterProducts stopLoading={stopLoading} />
      <ListProducts loading={loading} />

    </Main>
  )
}

export default ProductMain
