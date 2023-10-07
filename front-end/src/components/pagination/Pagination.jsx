import { ContainerPagination, PageNumber } from './styles'

const Pagination = () => {
  return (
    <ContainerPagination>
      <button>Previous</button>
      <PageNumber>
        <p>Page 1 of 10</p>
      </PageNumber>
      <button>Next</button>
    </ContainerPagination>
  )
}

export default Pagination
