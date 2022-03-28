import React, { useEffect, useRef, useContext } from 'react'
import Keys from '../keys'
import PianoContext from '../context/PianoContext'
const Key = (props) => {
  console.log('key rendered')
  const states = useContext(PianoContext)
  const ref = useRef(null)
  const { note, playNote } = props
  useEffect(() => {
    states.refs.push({ current: ref, note })
  }, [])
  let keyKeyboardValue
  Object.getOwnPropertyNames(Keys).forEach((item) => {
    if (item === note) {
      keyKeyboardValue = Keys[item]
    }
  })

  const keyClass = note.includes('-') ? 'black' : 'white'
  return (
    <div
      className={`key ${keyClass}`}
      onClick={() => playNote(note)}
      ref={ref}
      id={'key' + Math.floor(Math.random() * 100000)}
    >
      {keyKeyboardValue}
    </div>
  )
}

export default React.memo(Key)