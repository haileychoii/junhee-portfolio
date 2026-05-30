import { socialLinks } from '../data'

function Footer() {
  return (
    <footer className="footer">
      <p>Junhee Choi Portfolio Archive</p>

      <div className="footerLinks">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
            <span>{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer
