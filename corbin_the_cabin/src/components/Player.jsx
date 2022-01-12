import { useState } from 'react'
import data from '../data/data'

function Player() {

const [day, setDay] = useState(data[data.length - 1].day)

const backwards = () => {
  if(day > 0) {
    setDay(day - 1)
  } else {
    setDay(data[data.length - 1].day)
  }
}
const forwards = () => {
  if(day < data.length - 1) {
    setDay(day + 1)
  } else {
    setDay(0)
  }
}
const current = () => {
  setDay(data[data.length - 1].day)
}

const beginning = () => {
  setDay(0)
}

const screen = <img src={data[day].image} alt='Corbin'/> 

  return (
    <div className="player">
      <div className='image_container'>
        <h3>The Birth of Corbin</h3>
        {screen}
      </div>
      <div className="btns">
        <button onClick={beginning}>Beginning</button>
        <button onClick={backwards}>Backwards</button>
        <button onClick={forwards}>Forwards</button>
        <button onClick={current}>Current</button>
      </div>
      <div className="day_count">
        <h3>Day {day}</h3>    
      </div>
    </div>

  )
}

export default Player
