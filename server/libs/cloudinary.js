import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: 'jlmesadev',
  api_key: '113627291779222',
  api_secret: 'LyqpVmGoUaUF-r-wiYbDq0ysxyw'
});

export const uploadImage = async filePath => {
  return await cloudinary.v2.uploader.upload(filePath, {
    folder: 'images'
  });
}

export const deleteImage = async id => {
  return await cloudinary.uploader.destroy(id);
}
