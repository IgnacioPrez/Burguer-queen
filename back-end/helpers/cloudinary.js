import { v2 as cloudinary } from 'cloudinary'

export async function uploadImage (filePath) {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'image-burguerQueen'
  })
}

export async function deleteImage (publicId) {
  return await cloudinary.uploader.destroy(publicId)
}
