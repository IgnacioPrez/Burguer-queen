import nodemailer from 'nodemailer'
import { config } from 'dotenv'

config()
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ignacio.perez0204@gmail.com',
    pass: process.env.MY_PASS_EMAIL
  },
  from: 'ignacio.perez0204@gmail.com'
})

export const sendEmail = async (to, code) => {
  try {
    const emailOptions = {
      from: "'N4Z Igncictus' ignacio.perez0204@gmail.com",
      to,
      subject: 'Código de verificación',
      html: `
      <div style="font-family: Arial, sans-serif; text-align: center;">
        <h1 style="color: #007BFF;">Código de Autenticación</h1>
        <p>¡Hola!</p>
        <p>Tu código de autenticación es:</p>
        <h2 style="color: #007BFF;">${code}</h2>
        <p>Utiliza este código para acceder a tu cuenta de forma segura.</p>
        <p>Gracias por confiar en nosotros.</p>
        <p>Saludos,</p>
        <p>Tu equipo de soporte</p>
      </div>
    `
    }
    await transporter.sendMail(emailOptions)
    console.log('correo enviado al destinatario')
  } catch (err) {
    console.error('Error al enviar el correo electronico: ', err)
  }
}
