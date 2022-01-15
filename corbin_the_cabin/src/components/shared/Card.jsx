import Proptypes from 'prop-types'

function Card({children, title, color, text, size}) {

  if(!title){
    return (
      <div className="card">
        {children}
      </div>
    )
  } else if (title) {
    return (
      <div className="card_title">
        <div className="title" 
              style={{
                backgroundColor: color,
                borderColor: color,
                borderTopColor:'rgb(255, 255, 255)',
                borderLeftColor: 'rgb(255, 255, 255)',
                     }}>
         <h1 style={{
          fontSize: size,
         }}> {text} </h1>
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
