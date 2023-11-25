import { Stack } from '@mui/material'
import { ContainerPagination } from './styles'
import Pagination from '@mui/material/Pagination'
import { useSelector } from 'react-redux'

const PaginationList = () => {
  const state = useSelector((store) => store.product)
  return (
    <ContainerPagination>
      <Stack spacing={2}>
        <Pagination count={state.totalPages} color='primary' page={state.page} />
      </Stack>
    </ContainerPagination>
  )
}

export default PaginationList
