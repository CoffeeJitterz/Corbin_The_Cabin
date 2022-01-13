import { useState } from 'react'
import data from '../data/data'

import Card from './shared/Card'
import Button from './shared/Button'

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
  <Card>
    <div className="player">
      <div className='image_container'>
        <h3>The Birth of Corbin</h3>
        {screen}
      </div>
      <Card>
      <div className="btns">
        <Button onClick={beginning}>Beginning</Button>
        <Button onClick={backwards}>Backwards</Button>
        <Button onClick={forwards}>Forwards</Button>
        <Button onClick={current}>Current</Button>
      </div>
      </Card>
      <div className="day_count">
        <h3>Day {day}</h3>    
      </div>
    </div>
  </Card>
  )
}

export default Player
