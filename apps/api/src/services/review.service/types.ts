export default interface IReview{
    rating: number,
    comments: string,
    eventId: number,
    token: string,
}

export interface IReviewGet{
    eventId: number
}