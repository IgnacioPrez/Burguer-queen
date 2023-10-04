import styled from 'styled-components'

export const ContainerHome = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-row-gap: 0px;
  div:nth-child(2) {
    grid-area: 1 / 1 / 6 / 2;
  }
  div:nth-child(1) {
    grid-area: 1 / 2 / 2 / 6;
  }
  /* }
  .div3 {
    grid-area: 2 / 2 / 6 / 6;
  } */
`
