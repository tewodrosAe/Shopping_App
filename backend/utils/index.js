import cloudinary from "../cloudinary/index.js"

export const imageCreator = async(images) => {
    const picture = []
    for (const image of images) {
        try {
          const result = await cloudinary.uploader.upload(image, {
            upload_preset: 'Tech_shop',
            public_id: `product${Math.random() * 1000}`,
            allowed_formats: ['jpeg', 'png', 'jpg', 'webp'],
          })
          picture.push(result.secure_url)
        } catch (e) {
          console.log(e)
        }
      }
    return picture
}