import { NextFunction, Request, Response } from "express";
import { prisma } from "@/connection";
import { comparePassword } from "@/utils/passwordHash";
import { encodeToken } from "@/utils/token.sign";


export const authLogin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        const checkUser = await prisma.user.findMany({
            where: {
                OR: [{ email: email }]
            }
        });

        

        if (checkUser.length === 0) {
            throw { msg: "Email belum teregistrasi", status: 400 };
        }

        const isComparePassword = await comparePassword(password, checkUser[0].password);
        if (!isComparePassword) {
            throw { msg: "Password tidak valid!", status: 400 };
        }

        const token = await encodeToken({
            email: checkUser[0].email
        });

        res.status(200).json({
            error: false,
            message: 'Berhasil login',
            data: { email, token}
        });
    } catch (error) {
        next(error); 
    }
};

export const authLoginCreator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        const checkUser = await prisma.creator.findMany({
            where: {
                OR: [{ email: email }]
            }
        });

        if (checkUser.length === 0) {
            throw { msg: "Email belum teregistrasi", status: 400 };
        }

        const isComparePassword = await comparePassword(password, checkUser[0].password);
        if (!isComparePassword) {
            throw { msg: "Password tidak valid!", status: 400 };
        }

        const token = await encodeToken({
            email: checkUser[0].email
        });

        res.status(200).json({
            error: false,
            message: 'Berhasil login',
            data: { email, token}
        });
    } catch (error) {
        next(error); 
    }
};
