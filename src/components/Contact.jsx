import { useState } from 'react'
import './Contact.css'

function Contact({ t, language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Временное решение (демо режим)
    // Показываем успешную отправку после короткой задержки
    //setTimeout(() => {
    //  setSubmitStatus('success')
    //  setFormData({ name: '', email: '', message: '' })
    //  setIsSubmitting(false)
   // }, 1000)

     
    // РАСКОММЕНТИРУЙТЕ ЭТОТ КОД ПОСЛЕ НАСТРОЙКИ EmailJS или Formspree
    
    try {
      // Вариант 1: Используя EmailJS (рекомендуется)
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_f2n16el',
          template_id: 'template_pohml9q',
          user_id: 'gPYJisRNmBkCDslk8',
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          }
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }

      // Вариант 2: Используя Formspree (простая альтернатива)
      // Зарегистрируйтесь на formspree.io и получите endpoint
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData)
      // })

    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
    
  }

  const messages = {
    success: {
      en: 'Thank you for your message! We will get back to you soon.',
      ru: 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.',
      uz: 'Xabaringiz uchun rahmat! Tez orada siz bilan bog\'lanamiz.'
    },
    error: {
      en: 'Something went wrong. Please try again or contact us directly via email.',
      ru: 'Что-то пошло не так. Попробуйте еще раз или свяжитесь с нами напрямую по email.',
      uz: 'Nimadir noto\'g\'ri ketdi. Yana bir bor urinib ko\'ring yoki to\'g\'ridan-to\'g\'ri email orqali bog\'laning.'
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">{t.contact.title}</h2>
        <div className="contact-content">
          <div className="contact-links">
            <a href="mailto:Murodxojasultonov@gmail.com" className="contact-link">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>Murodxojasultonov@gmail.com</span>
            </a>
            <a href="mailto:Mirakmal07@gmail.com" className="contact-link">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>Mirakmal07@gmail.com</span>
            </a>
            <a href="https://github.com/murodxojasultonov" className="contact-link" target="_blank" rel="noopener noreferrer">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/mirakmal-mirbaratovv" className="contact-link" target="_blank" rel="noopener noreferrer">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            
            <div className="contact-divider">
              <span className="divider-text">{language === 'en' ? 'Phone Numbers' : language === 'ru' ? 'Телефоны' : 'Telefon raqamlar'}</span>
            </div>
            
            <a href="tel:+998977043135" className="contact-link">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+998 97 704 31 35 (Murodxoja)</span>
            </a>
            
            <a href="tel:+998987003135" className="contact-link">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+998 98 700 31 35 (Murodxoja)</span>
            </a>
            
            <a href="tel:+998951600077" className="contact-link">
              <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+998 95 160 00 77 (Mirakmal)</span>
            </a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder={t.contact.form.name}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder={t.contact.form.email}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              className="form-textarea"
              rows="5"
              placeholder={t.contact.form.message}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="btn-loading">
                  <svg className="spinner" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                  {language === 'en' ? 'Sending...' : language === 'ru' ? 'Отправка...' : 'Yuborilmoqda...'}
                </span>
              ) : (
                t.contact.form.send
              )}
            </button>
            
            {submitStatus === 'success' && (
              <div className="form-message form-success">
                ✓ {messages.success[language]}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="form-message form-error">
                ✗ {messages.error[language]}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
