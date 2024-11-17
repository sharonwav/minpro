import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  token: string;
  email: string
  setAuth: (authData: { token: string; email: string }) => void;
  setKeepAuth: (authData: { token: string; email: string }) => void;
  setAuthSignOut: () => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Initial State
      token: '',
      email: '',


      // Actions
      setAuth: ({ token, email}) => set({ token, email }),
      setKeepAuth: ({ token, email }) => set({ token, email }),
      setAuthSignOut: () => set({ token: '', email:'' }),
    }),
    {
      name: 'authToken', // Persist to localStorage
      partialize: (state) => ({ token: state.token }), // Only persist token
    }
  )
);

export default useAuthStore