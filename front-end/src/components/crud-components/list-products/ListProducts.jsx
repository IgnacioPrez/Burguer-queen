import { ActionsContent, ContainerList, ConteinerProducts, Product, ProductName, TitleList } from './styles'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { PaginationList } from '../pagination-list'
import { useDispatch } from 'react-redux'
import { BURGUERS, TYPES_MODAL } from '../../../utilities/constant'
import { openModal } from '../../../redux/slices/modalSlices'

const ListProducts = () => {
  const dispatch = useDispatch()

  const handleOPen = (id, type) => {
    return type === TYPES_MODAL.EDIT
      ? dispatch(openModal({
        open: true,
        id,
        type: TYPES_MODAL.EDIT
      }))
      : dispatch(openModal({
        open: true,
        id,
        type: TYPES_MODAL.DELETE
      }))
  }

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
                <div onClick={() => { handleOPen(id, TYPES_MODAL.EDIT) }}>
                  <EditIcon />
                </div>
                <div onClick={() => handleOPen(id, TYPES_MODAL.DELETE)}>
                  <DeleteIcon />
                </div>
              </ActionsContent>
            </Product>
          )
        })}
        <PaginationList />
      </ContainerList>
    </ConteinerProducts>
  )
}
export default ListProducts
