import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface StayModalState {
  open: boolean
  email: string
  subject: string
  message: string
  toggleOpen: () => void
  setEmail: (_: string)=>void
  setSubject: (_: string)=>void
  setMessage: (_: string)=>void
}

const useStayModalState = create<StayModalState>()(
  devtools(
    persist(
      (set) => ({
        open: false,
        email:'',
        subject:'',
        message:'',
        toggleOpen: () => set((state) => ({ ...state,  open: !state.open })),
        setEmail: (_: string) => set((state) => ({ ...state, email: _ })),
        setMessage: (_: string) => set((state) => ({ ...state, message: _ })),
        setSubject: (_: string) => set((state) => ({ ...state, subject: _ })),
      }),
      {
        name: 'stay-modal-state',
      },
    ),
  ),
)

export default useStayModalState;