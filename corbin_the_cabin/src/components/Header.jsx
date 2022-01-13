import {Link} from 'react-router-dom'

import Card from './shared/Card'
import Button from './shared/Button'

function Header() {
  return (
    <Card>
      <div className='header_container'>
        <Card>
          <h1 className='header'>Corbin the Cabin .com</h1>
        </Card>
        <Card>
        <Button>
        <Link to='/about'>About</Link>
        </Button>
        <Button>
        <Link to='/'>Home</Link>
        </Button>
        </Card>
      </div>
    </Card>
  )
}

export default Header
