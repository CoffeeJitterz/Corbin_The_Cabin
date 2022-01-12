import forest from '../images/forest.png';
import data from '../data/data';

function Player() {
  console.log(data)
  
  return (
    <div className="player">
      <div className='image_container'>
        <img src={data[0].image} alt="Forest"/>
      </div>
      <div className="day_count">
        <h3>Day {data[0].day}</h3>    
      </div>
    </div>

  )
}

export default Player
