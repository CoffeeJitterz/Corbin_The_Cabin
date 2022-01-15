import { useState } from 'react'
import data from '../data/data'

import Card from './shared/Card'
import Button from './shared/Button'

function Player() {

const [frame, setFrame] = useState(data[data.length - 1].frame)

const backwards = () => {
  if(frame > 0) {
    setFrame(frame - 1)
  } else {
    setFrame(data[data.length - 1].frame)
  }
}
const forwards = () => {
  if(frame < data.length - 1) {
    setFrame(frame + 1)
  } else {
    setFrame(0)
  }
}
const current = () => {
  setFrame(data[data.length - 1].frame)
}

const beginning = () => {
  setFrame(0)
}

const screen = <img src={data[frame].image} alt='Corbin'/> 

  return (
  <Card title={true} text='The Birth Of Corbin' color='pink' size='large'>
    <div className="player">
      <div className='image_container'>
        {screen}
      </div>
      <div className="date" >
        <h3>{data[frame].date}</h3>    
      </div>
      <Card>
      <div className="btns">
        <Button onClick={beginning}>Beginning</Button>
        <Button onClick={backwards}>Backwards</Button>
        <Button onClick={forwards}>Forwards</Button>
        <Button onClick={current}>Current</Button>
      </div>
      </Card>
    </div>
  </Card>
  )
}

export default Player
