import { cloudinaryUpload } from "@/utils/cloudinary";
import { Request } from "express";





const imagesUploaded = []
for (const image of files!){
    const result: any = await cloudinaryUpload(image.buffer)
    console.log(result)
    imagesUploaded.push(result.res!)
}