import React from 'react'
import { NavAdmin } from '../../../components/nav'
import { ContentCRUD } from './styles'
import { ProductMain } from '../../../components/main-crud/index'
const CrudProducts = () => {
  return (
    <ContentCRUD>
      <NavAdmin />
      <ProductMain />
    </ContentCRUD>
  )
}

export default CrudProducts
