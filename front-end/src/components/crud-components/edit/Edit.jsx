import { EditContainer, EditFields, FieldsRows, SelectedProduct } from './styles'
import { Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import SearchIcon from '@mui/icons-material/Search'
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
        <SearchIcon />
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
