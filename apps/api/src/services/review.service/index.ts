import { prisma } from "@/connection";
import IReview, { IReviewGet } from "./types";
import { decodeToken } from "@/utils/token.sign";

export const createReviewService = async({
    rating,
    comments,
    eventId,
    token,
}: IReview) => {
    await prisma.$transaction(async(tx) => {
        
        const convertToken: any = decodeToken(token)

        const emailUser: string = convertToken.data.email

        const getUser = await prisma.user.findUnique({
            where:{
                email: emailUser
            }
        })

        if(!getUser){
            throw new Error("User not found")
        }

        await tx.review.create({
            data: {
                rating,
                comments,
                eventId,
                userId: getUser.id
            }
        })

    })
}

export const getReviewService = async({
    eventId,
}: IReviewGet) => {
    
    const getReview = await prisma.$queryRaw `select r.comments, r.rating, u.email from Review r
                            join users u 
                            where r.eventId = ${eventId}`

    return getReview
}