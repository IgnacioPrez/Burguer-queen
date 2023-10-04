import styled from 'styled-components'
import { allRoutes } from '../../routes/routes'

export const NavContent = styled.div`
  width: 15vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundNav};
  h2 {
    color: #fff;
    height: 10%;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    padding: 10px;
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`

export const Navbar = styled.nav`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;


  ${(props) => {
    console.log(props)
    return props.location === allRoutes.HOME_ADMIN
? (
      `
        li:nth-child(1){
          background-color:${props.theme.hoverNav};
          color:${props.theme.firstTextColorNav};
        }
      `
    )
: `
        li:nth-child(2){
          background-color:${props.theme.hoverNav};
          color:${props.theme.firstTextColorNav};
        }
      `
  }}

  li {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 44px;
    padding: 12px;
    color: ${(props) => props.theme.secondTextColorNav};
    position: relative;
    cursor: pointer;

    svg {
      height: 15px;
      position: absolute;
      left: 12%;
    }
    a {
      width: 100%;
      padding: 12px;
    }
  }
`

export const LogoutContent = styled.div`
  width: 100%;
  display: flex;
  height: 10%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.firstTextColorNav};
  cursor: pointer;
`
