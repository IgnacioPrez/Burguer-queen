import React from 'react'
import { HeaderContainer, HeaderContent } from './styles'
import Avatar from '@mui/material/Avatar'
import { useSelector } from 'react-redux'

const Header = () => {
  const { userName } = useSelector((store) => store.user)

  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Hola, {userName} 🖐</h1>
        <Avatar />
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
