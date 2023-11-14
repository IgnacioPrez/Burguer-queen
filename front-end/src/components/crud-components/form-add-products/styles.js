import styled from 'styled-components'

export const FormCrud = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 420px;
  gap: 13px;
  padding: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  h2 {
    width: 100%;
    text-align: center;
    padding: 2px;
    color: ${(props) => props.theme.FirstTextColor};
  }
`

export const Uploader = styled.div`
  border: dashed 2px #1475cf;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 170px;
  cursor: pointer;
  svg {
    font-size: 70px;
  }
  img{
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`
export const ImageInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #e3e9f6;
  width: 100%;
`
export const RowsFields = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`
