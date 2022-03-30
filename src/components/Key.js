import React, { useEffect, useRef, useContext } from 'react'
import Keys from '../keys'
import PianoContext from '../context/PianoContext'
const Key = (props) => {
  const states = useContext(PianoContext)
  const ref = useRef(null)
  const { note, playNote } = props
  const keySource = require(`../sounds/${note}.mp3`)
  useEffect(() => {
    states.refs.push({
      current: ref,
      note,
      keySource,
    })
  }, [])
  let keyKeyboardValue
  Object.getOwnPropertyNames(Keys).forEach((item) => {
    if (item === note) {
      if (typeof Keys[item] === 'number') {
        keyKeyboardValue = String.fromCharCode(Keys[item]).toLowerCase()
      } else {
        keyKeyboardValue = Keys[item]
      }
    }
  })

  const keyClass = note.includes('-') ? 'black' : 'white'
  return (
    <div
      className={`key ${keyClass}`}
      onClick={() => playNote(note, 'mouse', keySource)}
      ref={ref}
    >
      {keyKeyboardValue}
    </div>
  )
}

export default React.memo(Key)
