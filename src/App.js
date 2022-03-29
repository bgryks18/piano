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
          playNote(x, 'keyboard')
        } else if (Keys[x] === e.keyCode) {
          playNote(x, 'keyboard')
        }
      })
    })
  }, [])
  const playNote = useCallback((key, way) => {
    new Audio(require(`./sounds/${key}.mp3`)).play()
    if (way === 'keyboard') {
      const keyElement = states.refs.find((ref) => ref.note === key).current
        .current
      if (keyElement.classList.contains('black')) {
        // zaman alacağı için 0px olmasına rağmen renk belirtiyoruz çünkü geçiş olacak
        keyElement.animate([{ borderBottom: '0px solid #141414' }], {
          duration: 100,
        })
      } else {
        keyElement.animate([{ backgroundColor: '#ececec' }], {
          duration: 100,
        })
      }
    }
  }, [])
  return (
    <div className="keyboard">
      {Object.getOwnPropertyNames(Keys).map((item) => {
        return <Key note={item} playNote={playNote} key={item} />
      })}
    </div>
  )
}

export default App
