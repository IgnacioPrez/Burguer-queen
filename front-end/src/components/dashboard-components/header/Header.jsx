import React from 'react'
import { HeaderContainer, HeaderContent } from './styles'
import Avatar from '@mui/material/Avatar'
import { useSelector } from 'react-redux'
const Header = () => {
  const { fullName } = useSelector((store) => store.user)
  const convertName = name => name.split(' ').splice(1, 3).map((el) => el.split('').slice(0, 1)).join('').trim()
  return (
    <HeaderContainer>
      <HeaderContent>
        <h1>Hola, {fullName.split(' ').splice(1, 3).join(' ')} 🖐</h1>
        <Avatar sx={{ bgcolor: 'rgb(103, 58, 183)' }}>{convertName(fullName)}</Avatar>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
