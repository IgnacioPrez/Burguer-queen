import { Box } from '@mui/material'
import Modal from '@mui/material/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../redux/slices/modalSlices'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  heigth: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

const ModalContent = ({ children }) => {
  const { open } = useSelector((store) => store.modal)
  const disptach = useDispatch()

  const handleClose = () => {
    disptach(closeModal())
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  )
}

export default ModalContent
