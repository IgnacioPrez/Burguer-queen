import { Stack } from '@mui/material'
import { ContainerPagination } from './styles'
import Pagination from '@mui/material/Pagination'

const PaginationList = () => {
  return (
    <ContainerPagination>
      <Stack spacing={2}>
        <Pagination count={10} color='primary' />
      </Stack>
    </ContainerPagination>
  )
}

export default PaginationList
