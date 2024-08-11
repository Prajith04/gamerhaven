import './header.css'
import logo from './assets/logo.png'
function Header(){
    return(
      <>
      <div className='header'>
      <div className='gh'>
         <img className='logo'src={logo} alt="logo" />
         <h1 className='gamerhaven'>GAMERHAVEN</h1>
      </div>
      <div className="nav">
         <a href="/">HOME</a>
         <a href="/company">GAMES</a>
         <a href="/contact">CONTACT</a>
         <a href="/about">ABOUT</a>
      </div>
      </div>
      </>
    )
}
export default Header;