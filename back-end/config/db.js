import mongoose from 'mongoose'
import { config } from 'dotenv'

config()
export const connectDB = async () => {
  try {
    const dbUrl = process.env.MY_MONGOOSE_URL
    await mongoose.connect(dbUrl)
    console.log('Se conecto correctamente')
  } catch (err) {
    console.log(err)
    throw new Error('Error al conectarse a la base de datos')
  }
}
