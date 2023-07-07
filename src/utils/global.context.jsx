import { createContext, useContext, useReducer } from 'react'
import { reducer } from './utils'

export const ContextGlobal = createContext(undefined)

export const ContextProvider = ({ children }) => {
  const theme = JSON.parse(localStorage.getItem('theme'))
  const initialState = { theme: theme }
  const [states, dispatch] = useReducer(reducer, initialState)

  return (
    <ContextGlobal.Provider value={{ states, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  )
}
export const useGlobalStates = () => {
  return useContext(ContextGlobal)
}
