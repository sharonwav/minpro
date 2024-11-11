import { Request, Response, NextFunction } from "express";
import { prisma } from "@/connection";
import { hashPassword } from "@/utils/passwordHash"; // assuming this utility exists

export const createCreator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        const { email, password } = req.body;

        // Check if email already exists
        const existingUser = await prisma.creator.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: true, message: "Email sudah terdaftar" });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Save the user to the database
        await prisma.creator.create({
            data: {
                email: email,
                password: hashedPassword
            }
        })
        res.status(201).json({
            error: false,
            message: "User berhasil dibuat",
            data: {}
        });
    } catch (error) {
        next(error);
    }
};
