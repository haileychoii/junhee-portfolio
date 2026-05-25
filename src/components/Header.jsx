import { useState } from 'react'
import { navItems } from '../data'
import EasterEgg from './EasterEgg'

function Header() {
  const [clickCount, setClickCount] = useState(0)
  const [isEggOpen, setIsEggOpen] = useState(false)

  const handleLogoClick = (event) => {
    event.preventDefault()

    const nextCount = clickCount + 1
    setClickCount(nextCount)

    if (nextCount >= 5) {
      setIsEggOpen(true)
      setClickCount(0)
    }
  }

  return (
    <>
      <header className="header">
        <a className="logo" href="#" onClick={handleLogoClick}>
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

      <EasterEgg isOpen={isEggOpen} onClose={() => setIsEggOpen(false)} />
    </>
  )
}

export default Header