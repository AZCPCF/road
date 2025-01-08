import { Link } from 'react-router-dom'
import { Menu, Button } from './styledCM'
import './style.css'
export default function LeftMenu() {
  return (
    <Menu>
      <Link to={'/'}><Button className='button'>Home</Button></Link>
      <Link to={'/users'}><Button className='button'>Users</Button></Link>
      <Link to={'/addUser'}><Button className='button'>Add user</Button></Link>
      <Link to={'/editUsers'}><Button className='button'>Edit user</Button></Link>
    </Menu>
  )
}
