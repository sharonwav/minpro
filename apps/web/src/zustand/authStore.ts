import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const authStore = create(persist((set) => ({
    token: '',
    email: '',

    setAuth: ({token, email}: any) => set({token: token, email: email}),
    setKeepAuth: ({email}: any) => set({email}),
    setAuthSignOut: set({token: ''})
}),
    {
        name: 'authToken',
        partialize: (state: any) => ({token: state.token})
    }

))

export default authStore;