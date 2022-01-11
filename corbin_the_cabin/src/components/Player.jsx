import forest from '../images/forest.png';

function Player() {
  return (
    <div className="player">
      <div className='image_container'>
        <img src={forest} alt="Forest"/>
      </div>
      <div className="day_count">
        <h3>Day 1</h3>    
      </div>
    </div>

  )
}

export default Player
