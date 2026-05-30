import { navItems, socialLinks } from '../data'

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#">
        JUNHEE ARCHIVE
      </a>

      <nav className="nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="headerSocials">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
            {link.icon}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Header
