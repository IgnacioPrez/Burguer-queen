import { AddBtn, AddProduct, HeaderCrud, Main, TitleCrud } from './styles'
import AddIcon from '@mui/icons-material/Add'
import { ListProducts } from '../list-products/ListProducts'
import { FilterProducts } from '../filterProducts'

const ProductMain = ({ openForm }) => {
  return (
    <Main>
      <HeaderCrud>
        <TitleCrud>
          <p>Productos de Burguer Queen 🍔</p>
        </TitleCrud>
        <AddProduct>
          <AddBtn onClick={openForm}>
            <AddIcon />
            Agregar Producto
          </AddBtn>
        </AddProduct>
      </HeaderCrud>
      <FilterProducts />
      <ListProducts />

    </Main>
  )
}

export default ProductMain
