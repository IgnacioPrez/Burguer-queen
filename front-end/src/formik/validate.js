import * as Yup from 'yup'

export const validationSchemaSignup = Yup.object({
  userName: Yup.string().trim().required('Campo requerido'),
  fullName: Yup.string().trim().required('Campo requerido'),
  dni: Yup.string().trim().required('Campo requerido'),
  email: Yup.string().email().trim().required('El correo es requerido'),
  password: Yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial'
  ).required('Contraseña requerida')
})

export const validationSchemaLogin = Yup.object({
  userName: Yup.string().trim().required('Campo requerido'),
  password: Yup.string().trim().required('Contraseña requerida')
})
