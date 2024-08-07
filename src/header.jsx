import './header.css'
function Header(){
    return(
        <>
         <h1 className='gamerhaven'>GAMERHAVEN</h1>
        <nav class="nav">
        <input id="menu" type="checkbox"></input>
        <label for="menu"></label>
        <ul class="menu">
          <li>
            <a href="/about">
              <span>About</span>
              <i class="fas fa-address-card" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/contact">
              <span>Contact</span>
              <i class="fas fa-tasks" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <span>Home</span>
              <i class="fas fa-users" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="/company">
              <span>Games</span>
              <i class="fas fa-envelope-open-text" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
      </>
    )
}
export default Header;