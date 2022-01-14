import {NavLink, BrowserRouter as Router} from 'react-router-dom'

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
        <NavLink to='/'  exact activeClassName="current" style={{textDecoration: 'none', color: 'black'}}>Home</NavLink>
        </Button>
        <Button>
        <NavLink to='/about' exact activeClassName="current" style={{textDecoration: 'none', color: 'black'}}>About</NavLink>
        </Button>
        </Card>
      </div>
    </Card>
 
  )
}

export default Header
