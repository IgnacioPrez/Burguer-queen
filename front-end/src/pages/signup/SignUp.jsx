import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { RegisterContainer } from './styles'
import { useFormik } from 'formik'
import { initialValuesRegister } from '../../formik/values'
import { validationSchemaSignup } from '../../formik/validate'
import { baseURL } from '../../utilities/constant'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../routes/routes'

export default function SignUp () {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValuesRegister,
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true)
      fetch(`${baseURL}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
        .then((data) => data.json())
        .then((result) => {
          if (result.user) {
            navigate(`${PublicRoutes.LOGIN}`, { replace: true })
          }
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setIsLoading(false)
        })
      resetForm()
    },
    validationSchema: validationSchemaSignup
  })
  return (
    <RegisterContainer>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Regístrate
          </Typography>
          <Box component='form' noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete='given-name'
                  {...getFieldProps('userName')}
                  iserror={touched.userName && errors.userName}
                  error={!!errors.userName && touched.userName}
                  required
                  fullWidth
                  label='Nombre de usuario'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label='Nombre completo'
                  {...getFieldProps('fullName')}
                  iserror={touched.fullName && errors.fullName}
                  error={!!errors.fullName && touched.fullName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='Correo'
                  {...getFieldProps('email')}
                  iserror={touched.email && errors.email}
                  error={!!errors.email && touched.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='Contraseña'
                  type='password'
                  {...getFieldProps('password')}
                  iserror={touched.password && errors.password}
                  error={!!errors.password && touched.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='D.N.I'
                  type='number'
                  {...getFieldProps('dni')}
                  iserror={touched.dni && errors.dni}
                  error={!!errors.dni && touched.dni}
                />
              </Grid>
            </Grid>
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }} disabled={isLoading}>
              {isLoading ? <CircularProgress /> : 'Registrarse'}
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link to={PublicRoutes.LOGIN}>
                  Ya tienes una cuenta? Inicia sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </RegisterContainer>
  )
}
