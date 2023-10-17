import { Box, Modal, TextField } from '@mui/material'
import { stylesModal } from '../../utilities/constant'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { FormCrud, ImageInfo, RowsFields, Uploader } from './styles'
import { useState } from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'

const FormAdd = ({ viewForm, closeForm }) => {
  const [image, setImage] = useState()
  const [fileName, setFileName] = useState('No selected file')
  return (
    <div>
      <Modal
        open={viewForm}
        onClose={closeForm}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={stylesModal}>
          <FormCrud>
            <h2>Agrega tú producto</h2>
            <input
              type='file' accept='image/*' hidden className='input-field' onChange={
                ({ target: { files } }) => {
                  files[0] && setFileName(files[0].name)
                  if (files) {
                    setImage(URL.createObjectURL(files[0]))
                  }
                }
              }
            />
            <Uploader onClick={() => document.querySelector('.input-field').click()}>
              {image ? <img src={image} alt={fileName} /> : <CloudUploadIcon sx={{ color: '#1475cf' }} />}
            </Uploader>
            <ImageInfo>
              <InsertDriveFileIcon sx={{ color: '#1475cf' }} />
              <span>
                {fileName}
              </span>
            </ImageInfo>
            <RowsFields>
              <TextField label='Nombre' variant='filled' />
              <TextField label='cetegoría' variant='filled' />
            </RowsFields>
            <RowsFields>
              <TextField label='stock' variant='filled' type='number' />
              <TextField label='precio' variant='filled' type='number' />
            </RowsFields>
          </FormCrud>
        </Box>
      </Modal>
    </div>
  )
}

export default FormAdd
