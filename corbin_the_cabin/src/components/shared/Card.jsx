import Proptypes from 'prop-types'

function Card({children, title, color, text}) {

  if(!title){
    return (
      <div className="card">
        {children}
      </div>
    )
  } else if (title) {
    return (
      <div className="card_title">
        <div className="title" style={{backgroundColor: color}}>
          {text}
        </div>
        {children}
      </div>
    )
  }
}

Card.propTypes = {
  title: false,
  color: 'none',
  text: null,
}

export default Card
