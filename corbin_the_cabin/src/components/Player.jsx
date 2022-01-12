import { useState } from 'react'
import data from '../data/data'

function Player() {

  const [day, setDay] = useState(data[data.length - 1].day)

const backwards = () => {
  if(day > 0) {
    setDay(day - 1)
      console.log(typeof day)
  } else {
    setDay(data[data.length - 1].day)
  }
}
const forwards = () => {
  if(day < data.length - 1) {
    setDay(day + 1)
      console.log(typeof day)
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
// let target = 3000
// let current = 0

// const countdown = () => {
// current = current + 1000
// console.log(current)
//   if (current <= 3000) {
//     return
//   } else {
//     console.log(current)
//       setTimeout(countdown, 1000)
//     }
// }

// const repeat = (n) => {
//   if(n <= 0) {
//     return
//   }
//   console.log(n);
  
//     setTimeout(() => {repeat(n - 1)}, 1000);
// }

// const player = (n) => {
// if (n <= 0) {
//   return
// }
// setImageData(...data[n])
// console.log(imageData)
// setTimeout(() => {player(n - 1), 1000})
// }
const screen = <img src={data[day].image}/> 

  return (
    <div className="player">
      <div className='image_container'>
        <h3>The Birth of Corbin</h3>
        {screen}
      </div>
      <div className="day_count">
        <button onClick={beginning}>Beginning</button>
        <button onClick={backwards}>Backwards</button>
        <button onClick={forwards}>Forwards</button>
        <button onClick={current}>Current</button>
        <h3>Day {day}</h3>    
      </div>
    </div>

  )
}

export default Player
