import styled from 'styled-components'

export const ContainerFilter = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SearchFilter = styled.form`
  border: solid 2px #e0e2e7;
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
  svg {
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
  border-radius: 5px;
  &:hover {
    background-color: #f2f2f2;
  }
`

export const AutoCompleteOptions = styled.ul`
  position: absolute;
  width: 25em;
  bottom: -10px;
  z-index: 2;
  background-color: #fff;
  li {
    padding: 2px;
    background-color: #dedede;
    cursor: pointer;
    &:hover {
      background-color: #fff;
    }
  }
`

export const ContentFiltersToApplay = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 30px;
  align-items: center;
  justify-content: space-between;
  position: relative;
`

export const MySearch = styled.div`
  width: 250px;
  border: solid 1px #2751cd;
  color: #2751cd;
  padding: 5px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg{
    font-size: 1rem;
  }
  button{
    border: none;
    color: inherit;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`
