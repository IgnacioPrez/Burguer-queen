import React from 'react'
import { HeaderContainer, HeaderContent } from './styles'
import Avatar from '@mui/material/Avatar'
import { useSelector } from 'react-redux'
const Header = () => {
  const { userName } = useSelector((store) => store.user)

  console.log()
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Hola, {userName} 🖐</h1>
        <Avatar sx={{ bgcolor: 'rgb(103, 58, 183)' }}>{userName.split('')[0].toUpperCase()}</Avatar>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
