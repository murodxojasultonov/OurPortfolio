import './Footer.css'

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">{t.footer.text}</p>
      </div>
    </footer>
  )
}

export default Footer
