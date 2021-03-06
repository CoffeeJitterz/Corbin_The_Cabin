// import Proptypes from 'prop-types'

function Card({children, title, color, text, size, fontColor}) {

  if(!title){
    return (
      <div className="card">
        {children}
      </div>
    )
  } else if (title) {
    return (
    <div>
    <div className="title" 
         style={{
         backgroundColor: color,
         borderColor: color,
         borderTopColor:'rgb(255, 255, 255)',
         borderLeftColor: 'rgb(255, 255, 255)',
         color: fontColor,
                     }}>
         <h1 style={{
          fontSize: size,
         }}> {text} </h1>
        </div>
      <div className="title_card">
        <div>
        {children}
       </div>
      </div>      
      </div>
    )
  }
}

// Card.PropTypes = {
//   title: false,
//   color: 'none',
//   text: null,
// }

export default Card
