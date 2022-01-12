import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header_container'>
      <h1 className='header'>Corbin the Cabin .com</h1>
      <Link to='/about'>About</Link>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default Header
