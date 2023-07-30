import styles from './app.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  countState,
  decrementCount,
  incrementAmt,
  incrementCount,
} from './redux/counterSlice'
import { useState } from 'react'

function App() {
  const counter = useSelector(countState)
  const dispatch = useDispatch()
  const [increment, setIncrement] = useState('2')

  const incrementValue = Number(increment) || 0

  function decrementNum() {
    dispatch(decrementCount())
  }

  function incrementNum() {
    dispatch(incrementCount())
  }
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.textContainer}>
          <p className={styles.text}>{counter}</p>
          <input
            className={styles.inputStyle}
            value={increment}
            type='text'
            onChange={(e) => setIncrement(e.target.value)}
          />
        </div>
        <div className={styles.btn}>
          <button
            disabled={counter === 0}
            onClick={() => decrementNum()}
            className={styles.button}
            style={{ backgroundColor: counter === 0 ? 'gray' : '' }}
          >
            Decrement Count
          </button>
          <button onClick={() => incrementNum()} className={styles.button}>
            Increment Count
          </button>
          <button
            className={styles.button}
            onClick={() => dispatch(incrementAmt(incrementValue))}
          >
            IncrementAmt
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
