import styled from 'styled-components'

export const EditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

`

export const SelectedProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  align-items: center;
  gap: 10px;
  p{
    font-size: 1.1rem;
    color: ${(props) => props.theme.FirstTextColor};
    font-weight: 700;
  }
  img {
    width: 180px;
  }
`

export const EditFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FieldsRows = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
`
