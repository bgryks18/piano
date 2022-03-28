import React, { createContext } from 'react'
const PianoContext = createContext()
PianoContext.displayName = `Bugra's Piano App`
let initState = {
  refs: [],
}
export const PianoProvider = ({ children }) => {
  return (
    <PianoContext.Provider value={initState}>{children}</PianoContext.Provider>
  )
}
export default PianoContext
