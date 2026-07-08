import { createContext, useContext, useState } from 'react'

const DemoModalContext = createContext(null)

export function DemoModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  return (
    <DemoModalContext.Provider value={{ open, openModal: () => setOpen(true), closeModal: () => setOpen(false) }}>
      {children}
    </DemoModalContext.Provider>
  )
}

export function useDemo() {
  return useContext(DemoModalContext)
}
