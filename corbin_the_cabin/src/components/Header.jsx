import {NavLink, BrowserRouter as Router} from 'react-router-dom'

import Card from './shared/Card'
import Button from './shared/Button'
import Title from './shared/Title'

function Header() {
  return (
    <Card>
      <Title title='Corbin The Cabin' />
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
