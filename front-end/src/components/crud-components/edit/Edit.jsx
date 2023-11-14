import { EditContainer, EditFields, FieldsRows, SelectedProduct } from './styles'
import sampleImage from '../../../assets/img/istockphoto-1398630614-1024x1024.jpg'
import { Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
})

const Edit = () => {
  return (
    <EditContainer>
      <SelectedProduct>
        <img src={sampleImage} alt='sample image' />
        <p>Nombre de hamburguesa</p>
      </SelectedProduct>
      <EditFields>
        <Button component='label' variant='contained' startIcon={<CloudUploadIcon />}>
          Upload file
          <VisuallyHiddenInput type='file' />
        </Button>
        <FieldsRows>
          <TextField label='Precio' variant='filled' type='number' />
          <TextField label='Stock' variant='filled' type='number' />
        </FieldsRows>
      </EditFields>
    </EditContainer>
  )
}

export default Edit
