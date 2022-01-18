import { useState } from 'react'
import data from '../data/data'

import Card from './shared/Card'
import Button from './shared/Button'

function Player() {

const lastFrame = data.length - 1
const [frame, setFrame] = useState(lastFrame)

const backwards = () => {
  if(frame > 0) {
    setFrame(frame - 1)
  } else {
    setFrame(lastFrame)
  }
}
const forwards = () => {
  if(frame < lastFrame) {
    setFrame(frame + 1)
  } else {
    setFrame(0)
  }
}
const current = () => {
  setFrame(lastFrame)
}

const beginning = () => {
  setFrame(0)
}
// const scrollWheel = e => {
//   console.log(frame)
//     (e.nativeEvent.wheelDelta > 0) ? setFrame(frame + 1) : setFrame(frame - 1)
//     if (e.nativeEvent.wheelDelta < 0){setFrame(0)}
//   }

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
