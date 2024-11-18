const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const bcrypt = require('bcrypt')

const saltRounds = 10
const hashPassword = async(password) => {
    return await bcrypt.hash(password, saltRounds)
}

const creator = [
    {
        email: 'sharon@gmail.com',
        password: 'sharon123'
    }
]



async function main(){
    const newCreator = await prisma.creator.create({
        data: {
            ...creator[0],
            password: await hashPassword(creator[0].password)
        }
    })

    console.log(newCreator)
}

main().catch((error) => {
    console.log(error)
}).finally(async() => {
    await prisma.$disconnect()
})