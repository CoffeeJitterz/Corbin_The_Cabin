import {Link} from 'react-router-dom'

import Card from './shared/Card'

function Header() {
  return (
    <Card>
      <div className='header_container'>
        <Card>
          <h1 className='header'>Corbin the Cabin .com</h1>
        </Card>
        <Card>
        <Link to='/about'>About</Link>
        <Link to='/'>Home</Link>
        </Card>
      </div>
    </Card>
  )
}

export default Header
