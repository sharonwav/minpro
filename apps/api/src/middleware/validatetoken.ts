import { NextFunction, Response, Request } from "express";
import { decodeToken } from "../utils/token.sign";

export const verifyToken = async(req: Request, res: Response, next: NextFunction) => {
    try {
        let {authorization} = req.headers
        authorization = authorization?.split(' ')[1]
        console.log(authorization);
        

        if(!authorization) throw {msg: 'Token Not Found', status: 400}
        
        const decodedToken: any = await decodeToken(authorization!)
        console.log(decodedToken)
        req.body.usersId = decodedToken?.data?.id
        req.body.authorizationRole = decodedToken?.data?.role

        next()
    } catch (error) {
        // Menuju ke Centralized Error
        next(error)
    }
}