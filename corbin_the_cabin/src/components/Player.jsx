import { useState } from 'react'
import data from '../data/data'

function Player() {

const [imageData, setImageData] = useState(data[data.length - 1])

const player = () => {
  const day = imageData.day

  if (day >= 1) {
    console.log(day)
    setImageData(data[day - 2])
    
    
  }

}
  
  return (
    <div className="player">
      <div className='image_container'>
        <h3>The Birth of Corbin</h3>
        <img src={imageData.image} />
      </div>
      <div className="day_count">
        <button onClick={player}>PLAY</button>
        <h3>Day {data[0].day}</h3>    
      </div>
    </div>

  )
}

export default Player
