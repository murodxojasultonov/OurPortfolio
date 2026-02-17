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
