import { NavAdmin } from '../../../components/nav'
import { ContentCRUD } from './styles'
import { ProductMain } from '../../../components/crud-components/main-crud/index'
import { ModalContent } from '../../../components/crud-components/modal-content'
import { useSelector } from 'react-redux'
import { TYPES_MODAL } from '../../../utilities/constant'
import { useState } from 'react'
import { Edit } from '../../../components/crud-components/edit'
import { Delete } from '../../../components/crud-components/delete'
import { FormAdd } from '../../../components/crud-components/form-add-products'

const CrudProducts = () => {
  const { typeModal } = useSelector((store) => store.modal)
  const [viewForm, setViewForm] = useState(false)

  const closeForm = () => {
    setViewForm(false)
  }
  const openForm = () => {
    setViewForm(true)
  }
  return (
    <ContentCRUD>
      <NavAdmin />
      <ProductMain openForm={openForm} />
      <ModalContent>
        {
          typeModal === TYPES_MODAL.DELETE
            ? (
              <Delete />
              )
            : <Edit />
        }
      </ModalContent>
      {
        viewForm && <FormAdd viewForm={viewForm} closeForm={closeForm} />
      }
    </ContentCRUD>
  )
}

export default CrudProducts
