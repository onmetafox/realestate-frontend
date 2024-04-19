import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface SuccessModalState {
  open: boolean
  toggleOpen: () => void
}

const useSuccessModalState = create<SuccessModalState>()(
  devtools(
    persist(
      (set) => ({
        open: false,
        toggleOpen: () => set((state) => ({ open: !state.open })),
      }),
      {
        name: 'success-modal-state',
      },
    ),
  ),
)

export default useSuccessModalState;