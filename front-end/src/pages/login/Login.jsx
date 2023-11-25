import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { LoginContainer } from './styles'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { useFormik } from 'formik'
import { initialValuesLogin } from '../../formik/values'
import { validationSchemaLogin } from '../../formik/validate'
import { CircularProgress } from '@mui/material'
import { useState } from 'react'
import { baseURL } from '../../utilities/constant'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/authSlices'
import { Link, useNavigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../../routes/routes'

export default function Login () {
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValuesLogin,
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true)
      fetch(`${baseURL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(values)
      })
        .then((data) => data.json())
        .then((result) => {
          console.log(result)
          if (result) {
            dispatch(login(result))
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
          }
        })
        .catch((err) => console.error(err))
        .finally(() => {
          setIsLoading(false)
        })

      resetForm()
    },
    validationSchema: validationSchemaLogin

  }
  )
  return (
    <LoginContainer>
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
            <LockOpenIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Iniciar sesión
          </Typography>
          <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='Correo'
                  {...getFieldProps('email')}
                  margin='normal'
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
                  margin='normal'
                  iserror={touched.password && errors.password}
                  error={!!errors.password && touched.password}
                />
              </Grid>

            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              {isLoading ? <CircularProgress /> : 'Iniciar sesión'}
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link to={PublicRoutes.SIGNUP}>
                  No tienes una cuenta? Regístrate
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </LoginContainer>
  )
}
