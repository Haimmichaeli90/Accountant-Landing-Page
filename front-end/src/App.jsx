import './assets/app.css';
import './i18n';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiArrowRight } from 'react-icons/fi';
import Testimonials from './Testimonials';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import Services from './Services';
import FAQ from './FAQ';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify'
import axios from 'axios'

function App() {
  const [text, setText] = useState('');
  const fullText = 'פתרונות ראיית חשבון מתקדמים';
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/contact`, data)

      console.log('✅ Email sent successfully', res.data)

      toast.success('תודה! ההודעה נשלחה בהצלחה')

      reset()
    } catch (err) {
      console.error('❌ Error sending email:', err)
      toast.error('שגיאה בשליחת ההודעה, נסה שוב מאוחר יותר')
    }
  }


  return (
    <div className="app">
      <Navbar />
      <header className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1>
            <span className="highlight">{t('heroHighlight')}</span> {t('heroTitle')}
          </h1>
          <p className="description">
            {t('heroDescription')}
          </p>
          <button className="cta-button" onClick={scrollToContact}>
            {t('contactTitle')} <FiArrowRight size={20} />
          </button>
        </div>
      </header>

      <Services />
      <FAQ />

      <section className="stats">
        <div className="stat-box">
          <h3>200+</h3>
          <p>{t('statsSatisfiedClients')}</p>
        </div>
        <div className="stat-box">
          <h3>3+</h3>
          <p>{t('statsYearsExperience')}</p>
        </div>
        <div className="stat-box">
          <h3>3000+</h3>
          <p>{t('statsReports')}</p>
        </div>
      </section>

      <Testimonials />

      <motion.section
        id="contact"
        className="contact"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-buttons">
          <a href="https://wa.me/972525402069" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            <FaWhatsapp size={24} /> WhatsApp
          </a>
          <a href="tel:0525402069" className="call-button">
            <FaPhone size={24} /> {t('callNow')}
          </a>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <About />
          <input
            type="text"
            placeholder={t('fullName')}
            {...register('name', { required: t('fullNameRequired') })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
          <input
            type="email"
            placeholder={t('email')}
            {...register('email', {
              required: t('emailRequired'),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t('emailInvalid'),
              },
            })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
          <textarea
            placeholder={t('message')}
            {...register('message', {
              required: t('messageRequired'),
              minLength: {
                value: 10,
                message: t('messageMinLength'),
              },
            })}
          />
          <button type="submit">{t('send')}</button>
        </form>
        {errors.message && <span className="error">{errors.message.message}</span>}
      </motion.section>

      <Footer />
    </div>
  );
}

export default App;
