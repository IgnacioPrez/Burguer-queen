import styled from 'styled-components'

export const ContainerFilter = styled.section`
  width: 100%;
  display: flex;
  padding: 5px 30px;
  align-items: center;
  justify-content: space-between;

`

export const SearchFilter = styled.div`
  border: solid 1px #e0e2e7;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2px;
  color: ${(props) => props.theme.SecondTextColor};
  border-radius: 5%;
    width: 25em;
  input {
    height: 100%;
    background-color: transparent;
    border: none;
    padding: 6px;
    width: 95%;
  }
  input:focus {
    outline: none;
  }

  input::placeholder {
    color: ${(props) => props.theme.SecondTextColor};
  }
  svg{
    font-size: medium;
    width: 5%;
  }
`

export const FilterContent = styled.div`
  color: #667085;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: solid 1px #e0e2e7;
  cursor: pointer;
  padding: 6px;
  border-radius:5px;
  &:hover{
    background-color:#f2f2f2;
  }
`
