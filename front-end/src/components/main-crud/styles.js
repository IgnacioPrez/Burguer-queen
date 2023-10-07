import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const HeaderCrud = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const TitleCrud = styled.div`
  p {
    font-size: 1.3rem;
    color: ${(props) => props.theme.FirstTextColor};
    font-weight: 700;
  }
`

export const AddProduct = styled.div`
  width: 10em;
  justify-content: center;
  align-items: center;
`

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #fff;
  background-color: #1d1f2c;
  border-radius: 10px;
  padding: 7px;
  cursor: pointer;
`
