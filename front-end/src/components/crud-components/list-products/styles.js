import styled from 'styled-components'

export const ConteinerProducts = styled.section`
  width: 100%;
  border-top: solid 1px #cfcfcf;
  height: 100%;
  margin-top: 1.5em;
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
`

export const TitleList = styled.div`
  width: 100%;

  ul {
    * {
      width: calc(100% / 6);
    }
    display: flex;
    justify-content: space-between;
    li {
      text-align: center;
    }
    align-items: centere;
    color: ${(props) => props.theme.SecondTextColor};
    padding: 4px;
  }
`

export const ContainerList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
`

export const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  * {
    width: calc(100% / 6);
    text-align: center;
  }
  padding: 3px;
  :nth-child(4) {
    font-weight: bold;
    ${(props) => (props.status ? 'color:#1A9882' : 'color:#EB3D4D')}
  }
`
export const ProductName = styled.div`
  display: flex;
  gap: 25px;
  p {
    font-size: 0.8rem;
    height: 100%;
    font-weight: bold;
    color: #1d1f2c;
    text-align: center;
  }
  img {
    width: 44px;
  }
`

export const ActionsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${(props) => props.theme.SecondTextColor};
  svg {
    cursor: pointer;
  }
`
