import { prisma } from "@/connection";
import {ITransaction, ItokenAuth} from "./types";
import { decodeToken } from "@/utils/token.sign";
const midtransClient = require("midtrans-client")
//import { Snap } from "midtrans-client";

const tokenSnap = new midtransClient.Snap({
    isProduction: false,
    serverKey: 'SB-Mid-server-8amPnLomyKrUivH7OAKVlMnw',
    clientKey: 'SB-Mid-client-N35EFYsUgGsFFRdf'
  });

export const createTransactionService = async ({
    totalPrice,
    eventId,
    tokenAuth
}: ITransaction) =>{
    try{
            
        await prisma.$transaction(async(tx)=>{
            const convertToken: any = decodeToken(tokenAuth)
    
            const emailUser : string = convertToken.data.email;
    
            const getUser = await prisma.user.findUnique({
                where:{
                    email: emailUser
                }
            })
    
            if(!getUser){
                throw new Error("User not found")
            }
    
            const setTransaction = await tx.transaction.create({
                data: {
                    totalPrice,
                    eventId,
                    userId: getUser.id
                }
            })

            console.log(setTransaction)
            
            const {id, orderNumber} = setTransaction

            const params = {
                transaction_details: {
                    order_id: orderNumber,
                    gross_amount: totalPrice
                },
                customer_details: {
                    email: getUser.email
                },
            }

            const transaction = await tokenSnap.createTransaction(params)

            await tx.transaction.update({
                where: {id},
                data: {midtrans_token: transaction.token}
            })

            return transaction.token

        })
    }catch(err){
        console.log(err)
    }
}

// export const getTransactionService = async ({tokenAuth}: ItokenAuth) => {

//     const convertToken: any = decodeToken(tokenAuth)
    
//     const emailUser : string = convertToken.data.email;
    

//     const getdataTransaction = prisma.transaction.findMany({

//     })
// }