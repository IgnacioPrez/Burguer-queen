export const baseURL = import.meta.env.VITE_DB_URL

export const TYPES_MODAL = {
  EDIT: 'edit',
  DELETE: 'delete'
}

export const stylesModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  heigth: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3
}

export const FILTER_TYPES = {
  BURGUER: 'hamburguesas',
  FRIES: 'papas',
  ALL: 'Todos'
}
