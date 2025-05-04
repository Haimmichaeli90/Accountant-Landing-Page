import './assets/About.css';
import { useTranslation } from 'react-i18next';
function About() {
  const { t } = useTranslation();


  return (
    <section id="about" className="about">
      <div className="about-content">
        <img src="https://res.cloudinary.com/drhqxomnq/image/upload/v1746339302/profile_tqbx4h.jpg" alt={t('aboutAlt')} className="profile-image" />
        <h2>{t('aboutTitle')}</h2>
        <p>{t('aboutParagraph1')}</p>
        <p>{t('aboutParagraph2')}</p>
        <p>{t('aboutParagraph3')}</p>
      </div>
    </section>
  );
}

export default About;
