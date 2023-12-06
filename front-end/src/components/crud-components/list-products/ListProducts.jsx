import { ActionsContent, ContainerList, ConteinerProducts, Product, ProductName, TitleList } from './styles'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { PaginationList } from '../pagination-list'
import { useDispatch, useSelector } from 'react-redux'
import { TYPES_MODAL } from '../../../utilities/constant'
import { openModal } from '../../../redux/slices/modalSlices'
import { ProductSkeleton } from '../product-skeleton'

const ListProducts = ({ loading }) => {
  const dispatch = useDispatch()
  const { unfiltered, withFilters } = useSelector((store) => store.product)

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
        {
         !withFilters.length > 0
           ? unfiltered.items.map(({ title, _id, image, category, price, stock }) => {
             return loading
               ? (
                 <ProductSkeleton key={_id} />
                 )
               : (<Product key={_id} status={stock}>
                 <ProductName>
                   <div>
                     <img src={image.url} alt={title} />
                   </div>
                   <p>{title}</p>
                 </ProductName>
                 <p>{category}</p>
                 <p>{10}</p>
                 <p>{price}</p>
                 <p>{stock ? 'Disponible' : 'Agotado'}</p>
                 <ActionsContent>
                   <div onClick={() => { handleOPen(_id, TYPES_MODAL.EDIT) }}>
                     <EditIcon />
                   </div>
                   <div onClick={() => handleOPen(_id, TYPES_MODAL.DELETE)}>
                     <DeleteIcon />
                   </div>
                 </ActionsContent>
               </Product>)
           })

           : withFilters.map(({ title, _id, image, category, price, stock }) => {
             return loading
               ? (
                 <ProductSkeleton key={_id} />
                 )
               : (
                 <Product key={_id} status={stock}>
                   <ProductName>
                     <div>
                       <img src={image.url} alt={title} />
                     </div>
                     <p>{title}</p>
                   </ProductName>
                   <p>{category}</p>
                   <p>{10}</p>
                   <p>{price}</p>
                   <p>{stock ? 'Disponible' : 'Agotado'}</p>
                   <ActionsContent>
                     <div onClick={() => { handleOPen(_id, TYPES_MODAL.EDIT) }}>
                       <EditIcon />
                     </div>
                     <div onClick={() => handleOPen(_id, TYPES_MODAL.DELETE)}>
                       <DeleteIcon />
                     </div>
                   </ActionsContent>
                 </Product>
                 )
           })

        }
      </ContainerList>
      <PaginationList />

    </ConteinerProducts>
  )
}
export default ListProducts
