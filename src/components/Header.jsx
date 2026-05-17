import { navItems } from '../data'

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#">
        J.CAREER ARCHIVE
      </a>

      <nav className="nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header