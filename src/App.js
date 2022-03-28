import React, { useCallback, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './style/style.min.css'
import Key from './components/Key'
import Keys from './keys'
import PianoContext from './context/PianoContext'
const App = () => {
  const states = useContext(PianoContext)
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.repeat) {
        return
      }
      Object.keys(Keys).forEach((x) => {
        if (Keys[x] === e.key) {
          playNote(x)
        }
      })
    })
  }, [])

  const playNote = useCallback((key) => {
    const keyElement = states.refs.find((ref) => ref.note === key).current
      .current
    const src = require(`./audio/${key}.mp3`)
    const audio = document.createElement('audio')
    audio.src = src
    document.querySelector(`#sounds`).append(audio)
    if (keyElement.classList.contains('black')) {
      keyElement.animate([{ borderBottom: '0px solid #141414' }], {
        duration: 100,
      })
    } else {
      keyElement.animate([{ backgroundColor: '#ececec' }], {
        duration: 100,
      })
    }
    audio.play()
  }, [])
  return (
    <div className="keyboard">
      {Object.getOwnPropertyNames(Keys).map((item) => {
        return <Key note={item} playNote={playNote} key={item} />
      })}
      <div id="sounds"></div>
    </div>
  )
}

export default App
