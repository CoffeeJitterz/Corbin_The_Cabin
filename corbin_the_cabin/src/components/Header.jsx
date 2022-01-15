import {NavLink} from 'react-router-dom'

import Card from './shared/Card'
import Button from './shared/Button'

function Header() {
  return (
    <Card title={true} 
          text='CORBIN THE CABIN' 
          color='yellow' 
          size='xxx-large'
          fontColor='blue'
          >
      <div className='header_container'>
        <Card>
        <NavLink to='/'  exact activeClassName="current" style={{textDecoration: 'none', color: 'black'}}><Button>Home</Button></NavLink>
        <NavLink to='/about' exact activeClassName="current" style={{textDecoration: 'none', color: 'black'}}><Button>About</Button></NavLink>
        </Card>
      </div>
    </Card>
 
  )
}

export default Header
