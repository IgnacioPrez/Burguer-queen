import styled from 'styled-components'

export const OrderBought = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.123);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5%;
  padding: 2px;
`

export const OrderBtn = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  button {
    border: none;
    background: transparent;
    width: max-content;
    cursor: pointer;
  }
`

export const OrderBody = styled.div`
  width: 100%;
  max-width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${(props) => props.theme.SecondTextColor};
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: small;
  span {
    font-weight: bold;
    color: ${(props) => (props.min <= 5 ? '#1A9882' : props.min <= 9 ? '#ff7b00' : '#EB3D4D')};
    transition: color 1s ease 0s;
  }

  svg {
    font-size: 4rem;
    color: ${(props) => (props.min <= 5 ? '#1A9882' : props.min <= 9 ? '#ff7b00' : '#EB3D4D')};
    transition: color 1s ease 0s;
  }
  text-align: center;
  max-width: 90%;
`
export const OrderTitle = styled.div`
  font-size: large;
  text-align: center;
  font-weight: bold;
`

export const Details = styled.div`
  display: flex;
  width: 90%;
  svg {
    font-size: 1.3rem;
  }
  button {
    color: ${(props) => props.theme.SecondTextColor};
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
`
