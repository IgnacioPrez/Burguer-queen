import React from 'react'
import { HeaderContainer, HeaderContent } from './styles'
import Avatar from '@mui/material/Avatar'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Hola, Micaela 🖐</h1>
        <Avatar />
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
