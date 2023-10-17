import React from 'react'
import { ActionsBtn, InfoDelete, QuestionDelte } from './styles'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../redux/slices/modalSlices'

const Delete = () => {
  const dispatch = useDispatch()

  const close = () => {
    dispatch(closeModal())
  }
  return (
    <InfoDelete>
      <QuestionDelte>
        <p>¿Estás seguro de que quieres eliminar este producto?</p>
      </QuestionDelte>
      <ActionsBtn>
        <Button variant='contained' color='success' size='large'>
          SI
        </Button>
        <Button variant='contained' color='error' size='large' onClick={close}>
          NO
        </Button>
      </ActionsBtn>
    </InfoDelete>
  )
}

export default Delete
