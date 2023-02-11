import Logo from '../../assets/logo.svg'
import Fb from '../../assets/icon-facebook.svg'
import Tw from '../../assets/icon-twitter.svg'
import Ig from '../../assets/icon-instagram.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <img
        src={ Logo }
        alt='Logo'
      />

      <p className='footer-text w400 center grey'>
        Copyright - Suite
      </p>

      <div className='footer__social-links'>
        <div className='link'>
          <img src={ Fb } alt='Facebook logo' />
        </div>
        <div className='link'>
          <img src={ Tw } alt='Twitter logo' />
        </div>
        <div className='link'>
          <img src={ Ig } alt='Instagram logo' />
        </div>
      </div>
    </footer>
  );
}

export default Footer
