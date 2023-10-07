import styled from 'styled-components'

export const ContainerPagination = styled.div`
  width: 100%;
  display: flex;
  padding: 7px;
  justify-content: space-between;
  align-items: center;
  button {
    color: #667085;
    border: solid 1px #e0e2e7;
    cursor: pointer;
    padding: 6px;
    border-radius: 5px;
    &:hover {
      background-color: #f2f2f2;
    }
  }
`

export const PageNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.SecondTextColor};
  p {
    text-align: center;
    white-space: nowrap;
  }

`
