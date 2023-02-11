import Logo from '../../assets/logo.svg'
import Button from '../pure/Button'

const Nav = () => {
  return (
    <nav className='nav'>
      <img src={ Logo } alt='Logo' className='nav-img' />

      <Button type='nav' />
    </nav>
  )
}

export default Nav
