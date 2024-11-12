'use client'
import { ReactNode, useEffect, useState } from "react"
import instance from "@/utils/axiosInstance"
import authStore from "@/zustand/authStore"
import { usePathname, useRouter } from "next/navigation"

interface IAuthProviderProps {
    children: ReactNode
}

const AuthProvider = ({children}: IAuthProviderProps) => {
    const pathname = usePathname()
    const router = useRouter()
    const token = authStore((state) => state.token)
    const setKeepAuth = authStore((state) => state.setKeepAuth)
    const [isKeepAuth, setIsKeepAuth] = useState(false)

    const fetchKeepAuth = async() => {
        try {
            const auth = await instance.get('/auth');
            setKeepAuth({email: auth?.data?.data?.email})
        } catch (error) {
            console.log(error)
        } finally {
            setIsKeepAuth(true)
        }
    }

    useEffect(() => {
        if(token) {
            fetchKeepAuth()
        } else {
            setIsKeepAuth(true)
        }
    }, [token])

    useEffect(() => {
        if(pathname === '/sign-in/creator' && token) {
            router.push('/creator')
        } else if (pathname === '/sign-in/user' && token) {
            router.push('/user')
        }

        if(isKeepAuth == true) {
            setTimeout(() => {
                if(!token && pathname.split('/')[1] !== 'reset password') {
                    router.push('/home')
                }
            })
        }
    }, [isKeepAuth])

    if(isKeepAuth === false) 
    return(
        <p>redirecting</p>
    )

    return(
        <>
            {children}
        </>
    )
}

export default AuthProvider