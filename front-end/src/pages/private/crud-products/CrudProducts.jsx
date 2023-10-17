import { NavAdmin } from '../../../components/nav'
import { ContentCRUD } from './styles'
import { ProductMain } from '../../../components/main-crud/index'
import { ModalContent } from '../../../components/modal-content'
import { useSelector } from 'react-redux'
import { TYPES_MODAL } from '../../../utilities/constant'
import { Delete, Edit } from '../../../components/actions-products'
import { useState } from 'react'
import { FormAdd } from '../../../components/form-add-products'

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
