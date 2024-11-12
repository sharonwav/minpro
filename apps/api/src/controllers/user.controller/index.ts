import { Request, Response, NextFunction } from 'express';
import { prisma } from '@/connection';
import { hashPassword } from '@/utils/passwordHash';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const referralCode = Date.now().toString().slice(0, 10);
        const { email, password, referralCode: refCodeFromRequest } = req.body;

        // Check if email already exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: true, message: "Email sudah terdaftar" });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Prepare data for new user
        const newUserData: any = {
            email,
            password: hashedPassword,
            referralCode,
            isVerified: false,
            totalPoint: 0,
        };

        if (refCodeFromRequest) {
            const referringUser = await prisma.user.findFirst({
                where: { referralCode: refCodeFromRequest },
            });

            if (referringUser) {
                // Increment the total points of the referring user
                await prisma.user.update({
                    where: { id: referringUser.id },
                    data: { totalPoint: referringUser.totalPoint + 10000 }, 
                });

                // Optionally, create a referral discount for the new user
                newUserData.referralDiscount = {
                    create: {
                        discount: 10, // Discount amount for the new user
                        expiry: new Date(new Date().setMonth(new Date().getMonth() + 3)), // 1-month expiry
                        isUsed: false,
                    },
                };
            }
        }

        // Save the new user to the database
        await prisma.user.create({
            data: newUserData,
        });

        res.status(201).json({
            error: false,
            message: "User berhasil dibuat",
            data: {},
        });
    } catch (error) {
        next(error);
    }
};
