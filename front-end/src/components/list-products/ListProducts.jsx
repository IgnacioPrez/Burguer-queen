import { BURGUERS } from '../../utilities/constant'
import { ActionsContent, ContainerList, ConteinerProducts, Product, ProductName, TitleList } from './styles'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { Pagination } from '../pagination'

export const ListProducts = () => {
  return (
    <ConteinerProducts>
      <TitleList>
        <ul>
          <li>Producto</li>
          <li>Categoría</li>
          <li>Stock</li>
          <li>Precio</li>
          <li>Estado</li>
          <li>Acciones</li>
        </ul>
      </TitleList>
      <ContainerList>
        {BURGUERS.map(({ title, id, image, category, price, stock, status }) => {
          return (
            <Product key={id} status={status}>
              <ProductName>
                <div>
                  <img src={image} alt={title} />
                </div>
                <p>{title}</p>
              </ProductName>
              <p>{category}</p>
              <p>{stock}</p>
              <p>{price}</p>
              <p>{status ? 'Disponible' : 'Agotado'}</p>
              <ActionsContent>
                <EditIcon />
                <DeleteIcon />
              </ActionsContent>
            </Product>
          )
        })}
        <Pagination />
      </ContainerList>

    </ConteinerProducts>
  )
}
